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
    <div class="w-[75%] m-auto bg-main_bg_color text-text_white">
      <Header />
      <div>
        <div class="flex flex-row gap-8">
          <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
      </div>
      <div class="flex flex-col justify-center gap-[2.75vh]">
        <div class="w-full flex flex-col gap-[2.3vh] text-[1.75rem] laptop_height:text-[1.5rem] leading-none">
          <input class="h-[4.75vh] px-[.75vw] py-[.5vh] w-full text-accent_text_color focus:shadow-none focus:outline-none" ref={todoNameRef} type="text" placeholder='Title' />
          <div class="h-[4.75vh] grid grid-cols-3 gap-[1vw] w-full">
            <input class="h-full px-[.75vw] py-[.5vh] text-accent_text_color focus:shadow-none focus:outline-none" ref={day} type="text" placeholder='Due Day' />
            <input class="h-full px-[.75vw] py-[.5vh] text-accent_text_color focus:shadow-none focus:outline-none" ref={month} type="text" placeholder='Due Month' />
            <input class="h-full px-[.75vw] py-[.5vh] text-accent_text_color focus:shadow-none focus:outline-none" ref={year} type="text" placeholder='Due Year' />
          </div>
          <textarea class="px-[.75vw] py-[1.5vh] text-accent_text_color focus:shadow-none focus:outline-none" ref={description} placeholder="Description" cols="30" rows="12"></textarea>
        </div>
        <button class="self-center m-auto w-fit px-[1.5vw] py-[.75vw] text-4xl font-semibold bg-button_color hover:bg-button_pressed_color hover:cursor-pointer" onClick={handleAddTodo}>Submit</button>
      </div>
      <Footer />
      <button class="hidden bg-button_color hover:bg-button_pressed_color hover:cursor-pointer" onClick={handleClearTodos}>Clear Complete</button>
    </div >
  )
}

export default App;
