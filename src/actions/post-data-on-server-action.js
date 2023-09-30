import { URL_TODOS } from '../constants/constants'
import { ACTIONS } from '.'

export const postDataOnServerAction = ({ valueInput, setValueInput }, flag) => {
  return (dispatch) => {
    return fetch(URL_TODOS, {
      method: 'POST',
      headers: { 'Content-type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ title: valueInput }),
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: ACTIONS.ADD_ITEM,
          payload: !flag,
        })
      })
      .catch((error) => console.log('Ошибка', error))
      .finally(() => {
        setValueInput('')
      })
  }
}
