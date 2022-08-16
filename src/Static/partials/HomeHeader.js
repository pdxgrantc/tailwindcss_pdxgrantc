import React from 'react'
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

import githubLogo from "../Images/githubLogo.png"

export default function HomeHeader({ title }) {
    var special_nav = "About This Site"
    var title_link = "/"
    var special_link = "/About-This-Site"
    if (title === undefined) {
        title = "Grant Conklin"
        title_link = "/"
    }
    else {
        special_nav = "Home"
    }

    if (title === "About This Site") {
        title_link = "/About-This-Site"
        special_link = "/"
    }


    return (
        <>
            <div class="on_mobile:hidden">
                <div class="flex justify-between">
                    <Link class="w-[35vw] bg-black pl-[5vw] text-[3.75rem] font-bold leading-[5.75rem] h-[12vh] hover:cursor-pointer mobile:text-4xl" to={title_link}>{title}</Link>
                    <div class="pr-[5vw] flex text-[2.75rem] font-semibold mobile:text-4xl">
                        <Link class="h-fit align-middle px-[1vw] py-[.5vw] hover:bg-button_pressed_color hover:cursor-pointer hover:ease-in-out duration-[350ms]" to="/Code">Code</Link>
                        <Link class="h-fit align-middle px-[1vw] py-[.5vw] hover:bg-button_pressed_color hover:cursor-pointer hover:ease-in-out duration-[350ms]" to="/ToDo">Apps</Link>
                        <Link class="h-fit align-middle px-[1vw] py-[.5vw] bg-button_accent_color hover:bg-transparent hover:cursor-pointer hover:ease-in-out duration-[350ms]" to={special_link}>{special_nav}</Link>
                    </div>
                </div>
            </div>
            <div class="on_desktop:hidden">
                <div class="flex justify-between text-4xl">
                    <Link class="w-[35vw] bg-black pl-[5vw] text-4xl font-bold leading-[5.75rem] h-[12vh]" to={title_link}>
                        <img id="inLogo" src={githubLogo} alt="Linkedin"></img>
                    </Link>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div class="hidden pr-[5vw] font-semibold">
                        <Link class="h-fit align-middle px-[1vw] py-[.5vw]" to="/Code">Code</Link>
                        <Link class="h-fit align-middle px-[1vw] py-[.5vw]" to="/ToDo">Apps</Link>
                        <Link class="h-fit align-middle px-[1vw] py-[.5vw] bg-button_accent_color" to={special_link}>{special_nav}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
