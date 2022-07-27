import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div class="flex justify-between mt-[3.54vh]">
                <div class="text-[2.75rem] h-full font-bold mobile:text-4xl">
                    <h1 class="px-[3vw] leading-[4.75rem] h-fit bg-button_color hover:bg-button_pressed_color hover:cursor-pointer">To-Do</h1>
                </div>
                <div class="my-auto h-fit flex text-[2.5rem] font-semibold mobile:text-4xl">
                    <Link class="px-[1vw] py-[.25vh] leading-[3.75rem] bg-button_color hover:bg-button_pressed_color hover:cursor-pointer" to="/">Home</Link>
                    <Link class="px-[1vw] py-[.25vh] leading-[3.75rem] bg-button_color hover:bg-button_pressed_color hover:cursor-pointer" to="/new-item">New Item</Link>
                </div>
            </div>
            <div class="mb-[3.5vh]"></div>
        </>
    )
}