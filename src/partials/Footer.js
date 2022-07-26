import React from 'react'
import githubLogo from "../images/githubLogo.png"
import inLogo from "../images/inLogo.png"

export default function Footer() {
    return (
        <>
            <div class="mt-[4vh] flex flex-col justify-center">
                <div class="m-auto justify-center flex w-1/4 gap-20 mobile:w-1/3 mobile:gap-12 ">
                    <a class="h-auto w-[10%] min-w-[4rem] mobile:w-1/2 hover:invert" href="https://www.linkedin.com/in/pdxgrantc/">
                        <img id="inLogo" src={inLogo} alt="Linkedin"></img>
                    </a>
                    <a class="h-auto w-[10%] min-w-[4rem] mobile:w-1/2 hover:invert" href="https://github.com/pdxgrantc/">
                        <img src={githubLogo} alt="GitHub"></img>
                    </a>
                </div>
                <div class="h-[2.5vh]"></div>
                <div class="m-auto w-fit text-[1.25rem]">
                    <h3 class="">Grant Conklin | pdxgrantc@gmail.com | 2022</h3>
                </div>
            </div>
        </>
    )
}
