import React from 'react'
import { Link } from "react-router-dom";

export default function Resume() {
    return (
        <div class="bg-black m-auto pt-[5vh] pb-[7vh]">
            <div class="w-[90%] m-auto">
                <div>
                    <h3 class="text-text_grey text-2xl">Work Experience</h3>
                    <h4 class="py-[1.25vh] text-6xl text-text_blue">Past Employment</h4>
                    <div class="flex gap-[10vw] mt-[2vh] text-4xl">
                        <div class="text-[2.75rem]">
                            <div>
                                <h5>Student Technology Consultant</h5>
                                <h6 class="pt-[.75rem] text-[1.65rem]">Oregon State University College of Forestry</h6>
                            </div>
                            <p class="text-[1.2rem]">Individual user computer support setup and software assistance.</p>
                        </div>
                        <div class="text-[2.75rem]">
                            <div>
                                <h5>University Presentation Support</h5>
                                <h6 class="pt-[.75rem] text-[1.65rem]">Oregon State University Information Technology</h6>
                            </div>
                            <p class="text-[1.2rem]">Individual user computer support setup and software assistance.</p>
                        </div>
                    </div>
                    <div class="h-[8vh]"></div>
                    <h4 class="py-[1.25vh] text-6xl text-text_pink">Volunteering Experiences</h4>
                    <div class="flex gap-[10vw] mt-[2vh] text-4xl">
                        <div class="text-[2.75rem]">
                            <div>
                                <h5>Free Geek Portland</h5>
                                <h6 class="pt-[.75rem] text-[1.65rem]">Electronics Recycling</h6>
                            </div>
                            <p class="text-[1.2rem]">Taking apart and sorting computer compnents to avoid e-waste.</p>
                        </div>
                    </div>
                </div>
                <div class="h-[8vh]"></div>
                <Link to="/files/Grant-Resume.pdf" target="_blank" class="text-2xl border-b-[1.5px] hover:bg-button_accent_color hover:ease-[cubic-bezier(0.4, 0, 1, 1)] duration-[350ms] hover:px-[1.25vw] py-[.5vh]" download>Resume Download</Link>
            </div>
        </div>
    )
}
