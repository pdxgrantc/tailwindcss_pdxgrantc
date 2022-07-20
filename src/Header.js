import React from 'react'

export default function Header() {
    return (
        <div class= "flex justify-between h-[5vh]">
            <div class="text-4xl">
                <h1>To-Do List</h1>
            </div>
            <div class="flex gap-4 text-3xl">
                <div>
                    <h2>Home</h2>
                </div>
                <div>
                    <h2>Add To-Do</h2>
                </div>
            </div>
        </div>
    )
}
