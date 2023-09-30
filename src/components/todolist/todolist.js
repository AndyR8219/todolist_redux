import styles from './todolist.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectorTodos, selectorFlag } from '../../selectors'
import { deleteDataAction, updateDataAction } from '../../actions'

export const TodoList = ({ statesInput }) => {
  const { searchInput, valueInput, setValueInput } = statesInput
  const todos = useSelector(selectorTodos)
  const flag = useSelector(selectorFlag)
  const dispatch = useDispatch()

  const searchItem = todos.filter((item) => {
    return item.title.toLowerCase().includes(searchInput.toLowerCase())
  })

  const deleteItem = (e) => {
    e.preventDefault()
    dispatch(deleteDataAction(e.target.value))
  }

  const updateItem = (e) => {
    if (valueInput.trim()) {
      e.preventDefault()
      dispatch(
        updateDataAction(e.target.value, valueInput, setValueInput, flag)
      )
    } else {
      alert('Введите новое значение в поле инпут')
    }
  }

  return (
    <div>
      {searchItem.map(({ id, title }) => (
        <div className={styles.item} key={id}>
          {title}
          <div className={styles.button}>
            <button
              name="updateItem"
              className={styles.changeButton}
              type="button"
              value={id}
              onClick={updateItem}
            >
              Изменить
            </button>
            <button
              name="deleteButton"
              className={styles.deleteButton}
              type="button"
              value={id}
              onClick={deleteItem}
            >
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
