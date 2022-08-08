import React from 'react'

import Resume from './Resume'

import Header from '../partials/Header'
import Footer from '../partials/Footer'

import Grant_Photo from "./Grant-Photo.jpg"
//<img class="h-[calc(100%-76px)]" src={Grant_Photo} alt="Grant"></img>

export default function Home() {
    return (
        <>
            <div class="m-auto bg-main_bg_color text-text_white">
                <Header />
                <div class="relative">
                    <img class="h-[88vh] w-auto" src={Grant_Photo} alt="Grant"></img>
                    <div class="absolute right-[5vw] bottom-[40vh]">
                        <h2 class="text-[4.5rem] font-bold mobile:text-4xl">I'm Grant Conklin</h2>
                        <h3 class="text-[3.5rem] font-semibold mobile:text-4xl ">Full Stack Web Developer</h3>
                        <h3 class="text-[3.5rem] font-semibold mobile:text-4xl text-text_grey">Student at Oregon State University</h3>
                    </div>
                </div>
                <div class="w-[35vw] h-[5vh] bg-black"></div>
                <Resume />
                <div class="mb-[8vh]"></div>
                <Footer />
            </div>
        </>
    )
}
