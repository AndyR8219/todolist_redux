import { URL_TODOS } from '../constants/constants'
import { ACTIONS } from '.'

export const deleteDataAction = (id) => {
  return (dispatch) => {
    return fetch(URL_TODOS + `/${id}`, { method: 'DELETE' })
      .then(() => {
        dispatch({ type: ACTIONS.DELETE_ITEM, payload: id })
      })
      .catch((err) => console.log('Ошибка ', err))
  }
}
