import React/*, { useState, useRef, useEffect }*/ from 'react'

//import { v4 as uuidv4 } from 'uuid'

//const LOCAL_STORAGE_KEY = 'todoApp.todos'

//TODO: add functionality to take title and store in local storage

export default function NewItem() {
  return (
    <div class="bg-black h-fit w-full px-[2vw] py-[2vh]">
      <input class="h-[4.75vh] px-[.75vw] py-[.5vh] text-2xl w-full text-accent_text_color focus:shadow-none focus:outline-none" type="text" placeholder='Item Name' />
      {/*
      <select name="pets" id="pet-select" class="text-black text-2xl w-full p-.5 outline-none">
        <option value=""> Purchased by: </option>
        <option value="grant">Grant</option>
        <option value="daniel">Daniel</option>
        <option value="quinn">Quinn</option>
      </select>
      */}
      <button class="text-4xl font-semibold py-[.95vh] w-fit m-auto border-b-[2.5px] hover:bg-button_accent_color hover:ease-[cubic-bezier(0.4, 0, 1, 1)] duration-[350ms] hover:px-[1.5vw]" >Add Item to List</button>
    </div>
  )
}
