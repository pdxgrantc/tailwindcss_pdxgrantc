import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div class="flex justify-between ">
                <Link class="w-[30vw] bg-black pl-[5vw] text-[3.75rem] font-bold leading-[4.75rem] h-[12vh] hover:cursor-pointer mobile:text-4xl" to="/">Grant Conklin</Link>
                <div class="pr-[5vw] flex text-[2.75rem] font-semibold mobile:text-4xl">
                    <Link class="h-fit align-middle px-[1vw] py-[.5vw] hover:bg-button_pressed_color hover:cursor-pointer hover:ease-in-out duration-[150ms]" to="/">Code</Link>
                    <Link class="h-fit align-middle px-[1vw] py-[.5vw] hover:bg-button_pressed_color hover:cursor-pointer hover:ease-in-out duration-[150ms]" to="/ToDo">ToDo</Link>
                    <Link class="h-fit align-middle px-[1vw] py-[.5vw] bg-accent_button_color hover:bg-transparent hover:cursor-pointer hover:ease-in-out duration-[350ms]" to="/">About This Site</Link>
                </div>
            </div>
            
        </>
    )
}
