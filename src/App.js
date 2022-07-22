import React, { useState, useRef, useEffect } from "react";

import TodoList from "./TodoList"
import Header from "./Header"
import Footer from "./Footer"
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  const day = useRef()
  const month = useRef()
  const year = useRef()
  const description = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const title = todoNameRef.current.value
    const dueDay = day.current.value
    const dueMonth = month.current.value
    const dueYear = year.current.value
    const todoDescription = description.current.value
    if (title === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {
        id: uuidv4(),
        title: title,
        dueDay: dueDay,
        dueMonth: dueMonth,
        dueYear: dueYear,
        todoDescription: todoDescription,
        complete: false
      }]
    })
    todoNameRef.current.value = null
    day.current.value = null
    month.current.value = null
    year.current.value = null
    description.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  /*<div>{todos.filter(todo => !todo.complete).length} items left to do</div>*/

  return (
    <div class="w-[75%] m-auto">
      <Header />
      <div>
        <div class="flex flex-row gap-8">
          <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
      </div>
      <div class="w-full flex flex-col gap-[2vh]">
        <input class="h-[3.5vh] w-full" ref={todoNameRef} type="text" placeholder='&nbsp; Title' />
        <div class="h-[3.5vh] grid grid-cols-3 gap-[1vw] w-full">
          <input class="h-full" ref={day} type="text" placeholder='&nbsp; Due Day' />
          <input class="h-full" ref={month} type="text" placeholder='&nbsp; Due Month' />
          <input class="h-full" ref={year} type="text" placeholder='&nbsp; Due Year' />
        </div>
        <textarea ref={description} placeholder="&nbsp; Description" cols="30" rows="10"></textarea>
        <button class="m-auto w-fit px-[1.5vw] py-[.75vw] text-4xl font-semibold bg-button_color hover:bg-button_pressed_color hover:cursor-pointer" onClick={handleAddTodo}>Submit</button>
        <button class="hidden bg-button_color hover:bg-button_pressed_color hover:cursor-pointer" onClick={handleClearTodos}>Clear Complete</button>
      </div>
      <Footer />
    </div >
  )
}

export default App;
