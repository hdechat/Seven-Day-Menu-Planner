import React from 'react'

const TodoList = ({ todoList }) => {
  const todos = props.map(todo => {
    return (
      <h3 key={todo.id}>
        { todo.text }
      </h3>
    )
  })
  return (
    <section>
      { todos }
    </section>
  )
}

export default TodoList