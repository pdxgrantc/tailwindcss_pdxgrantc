import React from 'react'
import githubLogo from "./images/githubLogo.png"
import inLogo from "./images/inLogo.png"

export default function Footer() {
    return (
        <>
            <div class="mt-[calc(five_vh)]"></div>
            <div class="flex flex-col gap-5">
                <div class="m-auto justify-center flex w-1/4 gap-20 mobile:w-1/3 mobile:gap-12 ">
                    <a class="h-auto w-1/3 min-w-five_rem mobile:w-1/2" href="https://www.linkedin.com/in/pdxgrantc/">
                        <img id="inLogo" src={inLogo} alt="Linkedin"></img>
                    </a>
                    <a class="h-auto w-1/3 min-w-five_rem mobile:w-1/2" href="https://github.com/pdxgrantc/">
                        <img src={githubLogo} alt="GitHub"></img>
                    </a>
                </div>
                <h3 class="mobile:text-green self-center">Grant Conklin | pdxgrantc@gmail.com | 2022</h3>
            </div>

        </>
    )
}
