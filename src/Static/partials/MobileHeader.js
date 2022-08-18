import React from 'react'
import { Link } from "react-router-dom";

export default function MobileHeader({ title }) {
    var special_nav = "About This Site"
    var special_link = "/About-This-Site"
    if (title === undefined) {
        title = "Grant Conklin"
    }
    else {
        special_nav = "Home"
    }

    if (title === "About This Site") {
        special_link = "/"
    }
    
    return (
        <div class="on_desktop:hidden flex justify-around bg-black w-[90vw] m-auto h-[5vh]">
            <Link class="h-fit my-auto text-[1.5rem]" to="/">Home</Link>
            <Link class="h-fit my-auto text-[1.5rem]" to="/Code">Code</Link>
            <Link class="h-fit my-auto text-[1.5rem]" to="/ToDo">Apps</Link>
            <Link class="h-fit my-auto text-[1.5rem]" to={special_link}>{special_nav}</Link>
        </div>
    )
}
