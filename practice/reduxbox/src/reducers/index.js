import { combineReducers } from 'redux'

const todoListReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, {text: action.text, id: action.id, completed: false}]
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
    case 'TOGGLE_TODO':
      return state.map(todo => state.id === action.id ? {...todo, completed: !todo.completed} : todo)
    default: 
      return state
  }
}

const filterTypeReducer = (state = '', action) => {
  switch(action.type) {
    case 'FILTER_TYPE':
      return action.filter
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todoList: todoListReducer,
  filterType: filterTypeReducer
})

export { todoListReducer, filterTypeReducer, rootReducer }