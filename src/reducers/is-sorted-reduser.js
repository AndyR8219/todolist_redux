import { ACTIONS } from '../actions'

export const initialSortedState = { isSorted: false }

export const isSortedReducer = (state = initialSortedState, action) => {
  switch (action.type) {
    case ACTIONS.IS_SORTED: {
      return { ...state, isSorted: action.payload }
    }
    default:
      return state
  }
}
