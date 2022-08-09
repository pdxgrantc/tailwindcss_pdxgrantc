import React from 'react'
import { Link } from "react-router-dom";
/*
export default function ToDoHeader() {
    return (
        <>
            <div class="flex justify-between mt-[3.54vh]">
                <div class="text-[2.75rem] h-full font-bold mobile:text-4xl">
                    <Link class="py-[1vh] px-[3vw] leading-[4.75rem] h-fit bg-button_color hover:bg-button_pressed_color hover:cursor-pointer" to="/">PDX</Link>
                </div>
                <div class="my-auto h-fit flex text-[2.5rem] font-semibold mobile:text-4xl">
                    <Link class="px-[1vw] py-[.25vh] leading-[3.75rem] bg-button_color hover:bg-button_pressed_color hover:cursor-pointer" to="/ToDo">Home</Link>
                    <Link class="px-[1vw] py-[.25vh] leading-[3.75rem] bg-button_color hover:bg-button_pressed_color hover:cursor-pointer" to="/ToDo/new-item">New Item</Link>
                </div>
            </div>
            <div class="mb-[3.5vh]"></div>
        </>
    )
}
*/

export default function ToDoHeader() {
    return (
        <div class="flex justify-between ">
            <Link class="w-[35vw] bg-black pl-[5vw] text-[3.75rem] font-bold leading-[5.75rem] h-[12vh] hover:cursor-pointer mobile:text-4xl" to="/ToDo">ToDo List</Link>
            <div class="pr-[5vw] flex text-[2.75rem] font-semibold mobile:text-4xl">
                <Link class="h-fit align-middle px-[1vw] py-[.5vw] hover:bg-button_pressed_color hover:cursor-pointer hover:ease-in-out duration-[150ms]" to="/">Home</Link>
                <Link class="h-fit align-middle px-[1vw] py-[.5vw] hover:bg-button_pressed_color hover:cursor-pointer hover:ease-in-out duration-[150ms]" to="/ToDo">Apps</Link>
                <Link class="h-fit align-middle px-[1vw] py-[.5vw] bg-button_accent_color hover:bg-transparent hover:cursor-pointer hover:ease-in-out duration-[350ms]" to="/ToDo/New-Item">New Item</Link>
            </div>
        </div>
    )
}
