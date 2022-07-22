import React from 'react'

export default function Header() {
    return (
        <>
            <div class="flex justify-between h-[5vh] mt-[calc(5vh)]">
                <div class="text-4xl">
                    <h1 class="bg-button_color hover:bg-button_pressed_color">To-Do List</h1>
                </div>
                <div class="flex gap-4 text-3xl">
                    <div>
                        <h2 class="bg-button_color hover:bg-button_pressed_color">Home</h2>
                    </div>
                    <div>
                        <h2 class="bg-button_color hover:bg-button_pressed_color">Add To-Do</h2>
                    </div>
                </div>
            </div>
            <div class="mb-[calc(5vh)]"></div>
        </>
    )
}
