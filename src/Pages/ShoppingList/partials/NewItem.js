import React from 'react'

import { v4 as uuidv4 } from 'uuid'

export default function NewItem() {
  function handleAddTodo() {
    const item_title = item_title.current.value
    const purchaser = purchaser.current.value
    if (item_title === '') return
    SetItems(prevItems => {
      return [...prevTodos, {
        id: uuidv4(),
        title: item_title,
        purchaser: purchaser,
      }]
    })
  }

  return (
    <div class="bg-black w-1/2 px-[2vw] py-[2vh]">
      <input class="h-[4.75vh] px-[.75vw] py-[.5vh] w-full text-accent_text_color focus:shadow-none focus:outline-none" ref={item_title} type="text" placeholder='Title' />
      <select name="pets" id="pet-select" class="text-black text-2xl w-full p-.5 outline-none" ref={purchaser}>
        <option value=""> Purchased by: </option>
        <option value="grant">Grant</option>
        <option value="daniel">Daniel</option>
        <option value="quinn">Quinn</option>
      </select>
      <button class="text-4xl font-semibold py-[.95vh] w-fit m-auto border-b-[2.5px] hover:bg-button_accent_color hover:ease-[cubic-bezier(0.4, 0, 1, 1)] duration-[350ms] hover:px-[1.5vw]" onClick={HandleNewItem}>Submit</button>
    </div>
  )
}
