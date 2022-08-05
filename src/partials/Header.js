import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div class="flex justify-between h-fit">
                <Link class="w-[30vw] bg-black pl-[5vw] text-[2.75rem] font-bold leading-[4.75rem] h-fit hover:cursor-pointer mobile:text-4xl" to="/">Grant Conklin</Link>
                <div class="pr-[5vw] m-0 flex text-[2.5rem] font-semibold mobile:text-4xl">
                    <Link class="h-full px-[1vw] py-[.5vh] leading-[4rem] hover:bg-button_pressed_color hover:cursor-pointer hover:ease-in-out duration-[150ms]" to="/">Code</Link>
                    <Link class="h-full px-[1vw] py-[.5vh] leading-[4rem] hover:bg-button_pressed_color hover:cursor-pointer hover:ease-in-out duration-[150ms]" to="/ToDo">ToDo</Link>
                    <Link class="h-full px-[1vw] py-[.5vh] leading-[4rem] bg-accent_button_color hover:bg-transparent hover:cursor-pointer hover:ease-in-out duration-[350ms]" to="/">About Me</Link>
                </div>
            </div>
            <div class="mb-[3.5vh]"></div>
        </>
    )
}
