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
        <div class="on_desktop:hidden flex justify-around bg-black w-[90vw] m-auto h-[5vh] text-[1.25rem]">
            <Link class="h-fit my-auto" to="/">Home</Link>
            <Link class="h-fit my-auto" to="/Code">Code</Link>
            <Link class="h-fit my-auto" to="/ToDo">Apps</Link>
            <Link class="h-fit my-auto" to={special_link}>{special_nav}</Link>
        </div>
    )
}
