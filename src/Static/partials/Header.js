import React from 'react'
import { Link } from "react-router-dom";

import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

export default function Header({ title }) {
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
                <DesktopHeader />
            </div>
            <div class="on_desktop:hidden flex justify-around bg-black w-[90vw] m-auto h-[5vh]">
                <MobileHeader />
            </div>
        </>
    )
}
