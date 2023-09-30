import { useState, useEffect } from 'react'
import styles from './App.module.css'
import { TodoList, OnChangeInputValue, OnChangeSearch } from './components/'
import { useSelector, useDispatch } from 'react-redux'
import { selectorIsSorted, selectorFlag } from './selectors'
import {
  getDataFromServerAction,
  isSortedAction,
  postDataOnServerAction,
} from './actions'
import { SORTING } from './constants/constants'

function App() {
  const [valueInput, setValueInput] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const statesInput = { valueInput, setValueInput, searchInput }

  const isSorted = useSelector(selectorIsSorted)
  const flag = useSelector(selectorFlag)

  const dispatch = useDispatch()

  useEffect(() => {
    if (isSorted) {
      dispatch(getDataFromServerAction(SORTING))
    } else {
      dispatch(getDataFromServerAction(''))
    }
  }, [dispatch, isSorted, flag])

  const RequestAddItem = (e) => {
    e.preventDefault()
    if (valueInput.trim()) {
      dispatch(postDataOnServerAction(statesInput, flag))
    } else {
      alert('Поле не должно быть пустым')
    }
  }

  const SortedItems = (e) => {
    e.preventDefault()

    dispatch(isSortedAction(!isSorted))
  }

  return (
    <form className={styles.form}>
      <div className={styles.inputBlock}>
        <input
          className={styles.input}
          type="text"
          value={valueInput}
          onChange={(e) => OnChangeInputValue(e, setValueInput)}
          placeholder="Введите название заметки"
        />
        <button
          name="addButton"
          className={styles.button}
          type="submit"
          onClick={RequestAddItem}
        >
          Добавить запись
        </button>
      </div>
      <div className={styles.optionBlock}>
        <input
          className={styles.search}
          type="text"
          value={searchInput}
          placeholder="Поиск"
          onChange={(e) => OnChangeSearch(e, setSearchInput)}
        />
        <button
          name="sortedButton"
          type="button"
          className={isSorted ? styles.sorted : styles.notSorted}
          onClick={SortedItems}
        >
          Сортировка
        </button>
      </div>
      <TodoList statesInput={statesInput} />
    </form>
  )
}

export default App
