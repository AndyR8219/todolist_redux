import { URL_TODOS } from '../constants/constants'
import { ACTIONS } from '.'

export const updateDataAction = (id, valueInput, setValueInput, flag) => {
  return (dispatch) => {
    return fetch(URL_TODOS + `/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        title: valueInput,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((res) => {
        dispatch({
          type: ACTIONS.UPDATE_ITEM,
          payload: { res, flag: !flag },
        })
        setValueInput('')
      })
      .catch((error) => console.log('Ошибка', error))
  }
}
