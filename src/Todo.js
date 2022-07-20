import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <>
            <div className=''>
                <label>
                    <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} className="text-color-green" />
                    <p> {todo.title} </p>
                    <div className='flex'>
                        <p> {todo.dueDay} </p>
                        <p> {todo.dueMonth} </p>
                        <p> {todo.dueYear} </p>
                    </div>
                    <p> {todo.todoDescription} </p>
                </label>
            </div>
        </>
    )
}