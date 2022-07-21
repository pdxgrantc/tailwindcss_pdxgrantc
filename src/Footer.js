import React from 'react'
import githubLogo from "./images/githubLogo.png"
import inLogo from "./images/inLogo.png"

export default function Footer() {
    return (
        <div class="flex flex-col gap-3">
            <div class="w-1/4 flex self-center justify-around m-auto">
                <a class="h-auto hover:invert w-3/12" href="https://www.linkedin.com/in/pdxgrantc/">
                    <img id="inLogo" src={inLogo} alt="Linkedin"></img>
                </a>
                <a class=" h-auto hover:invert w-3/12" href="https://github.com/pdxgrantc/">
                    <img src={githubLogo} alt="GitHub"></img>
                </a>
            </div>
            <h3 class="self-center">Grant Conklin | pdxgrantc@gmail.com | 2022</h3>
        </div>
    )
}
