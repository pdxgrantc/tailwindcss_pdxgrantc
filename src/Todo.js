import React from 'react'

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} class="text-color-green"/>
        {todo.title}
        {todo.dueDay}
        {todo.dueMonth}
        {todo.dueYear}
        {todo.todoDescription}
      </label>
    </div>
  )
}