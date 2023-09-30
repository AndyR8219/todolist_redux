import { URL_TODOS } from '../constants/constants'
import { ACTIONS } from '.'

export const getDataFromServerAction = (sortRequest) => {
  return (dispatch) => {
    return fetch(URL_TODOS + sortRequest, {
      method: 'GET',
      headers: { 'Content-type': 'application/json;charset=utf-8' },
    })
      .then((rawResponse) => rawResponse.json())
      .then((res) => {
        dispatch({
          type: ACTIONS.GET_DATA_FROM_SERVER,
          payload: res,
        })
      })
      .catch((err) => console.log('Ошибка', err))
  }
}
