import React from 'react'
import { Link } from "react-router-dom";

import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

export default function Header({ title }) {

    return (
        <>
            <div class="on_mobile:hidden">
                <DesktopHeader title/>
            </div>
            <div class="on_desktop:hidden flex justify-around bg-black w-[90vw] m-auto h-[5vh]">
                <MobileHeader title/>
            </div>
        </>
    )
}
