import { ACTIONS } from '.'

export const isSortedAction = (delta) => ({
  type: ACTIONS.IS_SORTED,
  payload: delta,
})
