import React from 'react'
import { Link } from "react-router-dom";

export default function MobileHeader() {
    if (window.location.pathname === "/") {
        return (
            <div class="on_desktop:hidden flex justify-around bg-black w-[90vw] m-auto h-[10vh] text-[1.65rem]">
                <Link class="h-fit my-auto" to="/Code">Code</Link>
                <Link class="h-fit my-auto" to="/ToDo">Apps</Link>
                <Link class="h-fit my-auto" to="/about-this-site">About This Site</Link>
            </div>
        )
    }
    else {
        return (
            <div class="on_desktop:hidden flex justify-around bg-black w-[90vw] m-auto h-[10vh] text-[1.65rem]">
                <Link class="h-fit my-auto" to="/">Home</Link>
                <Link class="h-fit my-auto" to="/Code">Code</Link>
                <Link class="h-fit my-auto" to="/ToDo">Apps</Link>
            </div>
        )
    }
}
