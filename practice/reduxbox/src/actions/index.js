export const addTodo = (text) => ({
  type: 'ADD_TODO',
  text,
  id: Date.now(),
})

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const filterType = (filter) => ({
  type: 'FILTER_TYPE',
  filter
})
