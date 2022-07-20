import React from 'react'
import githubLogo from "./images/githubLogo.png"
import inLogo from "./images/inLogo.png"

export default function Footer() {
    return (
        <div class="flex flex-col gap-3">
            <div class="flex gap-6 justify-center">
                <a class="w-1/12 h-auto hover:invert" href="https://www.linkedin.com/in/pdxgrantc/">
                    <img id="inLogo" src={inLogo} alt="Linkedin"></img>
                </a>
                <a class="w-1/12 h-auto hover:invert" href="https://github.com/pdxgrantc/">
                    <img src={githubLogo} alt="GitHub"></img>
                </a>
            </div>
            <h3 class="self-center">Grant Conklin | pdxgrantc@gmail.com | 2022</h3>
        </div>
    )
}
