import React from 'react'

export default function Header() {
    return (
        <>
            <div class="flex justify-between h-[95px] mt-[3.54vh]">
                <div class="text-6xl h-full font-medium mobile:text-4xl">
                    <h1 class="px-[3vw] leading-normal h-full bg-button_color hover:bg-button_pressed_color hover:cursor-pointer">To-Do List</h1>
                </div>
                <div class="h-fit flex gap-6 text-[52px] font-[500] mobile:text-4xl">
                    <h2 class="align-middle m-auto px-[2vw] leading-relaxed bg-button_color hover:bg-button_pressed_color hover:cursor-pointer">Home</h2>
                    <h2 class="align-middle m-auto px-[2vw] leading-relaxed bg-button_color hover:bg-button_pressed_color hover:cursor-pointer">Add To-Do</h2>
                </div>
            </div>
            <div class="mb-[5vh]"></div>
        </>
    )
}
