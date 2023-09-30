import { ACTIONS } from '../actions'

export const initialTodoState = {
  todos: [],
  flag: false,
}

export const todoReducer = (state = initialTodoState, action) => {
  const { GET_DATA_FROM_SERVER, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } = ACTIONS

  switch (action.type) {
    case GET_DATA_FROM_SERVER: {
      return {
        ...state,
        todos: action.payload,
      }
    }
    case ADD_ITEM: {
      return {
        ...state,
        flag: action.payload,
      }
    }
    case DELETE_ITEM: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== +action.payload),
      }
    }
    case UPDATE_ITEM: {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.res.id ? action.payload.res : todo
        ),
        flag: action.payload.flag,
      }
    }
    default:
      return state
  }
}
