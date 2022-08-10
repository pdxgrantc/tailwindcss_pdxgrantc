import React from "react";

import Header from "../../Static/partials/HomeHeader";
import Footer from "../../Static/partials/Footer";

import react from "../../Static/Images/react.jpg";
import HomeScreeenshot from "../../Static/Images/HomeScreenshot.jpg";

export default function AboutThisSite() {
    return (
        <div class="m-auto bg-main_bg_color text-text_white">
            <Header title={"About This Site"} />
            <div class="h-[6vh]"></div>
            <div class="mx-[7vw]">
                <div class="pr-[5%] w-[100%] flex justify-between bg-black">
                    <img class="w-[58%] h-auto" src={HomeScreeenshot} alt="HomePage"></img>
                    <div class="w-[42%] flex flex-col justify-center gap-5 pb-2 px-[3vw]">
                        <h2 class="text-6xl text-text_pink">Origins</h2>
                        <h3 class="align-middle leading-[1.1] text-[2.5rem] text-wrap">I developed this site as a display of ability in full stack development. As well as to have a place to host my self developed web apps.</h3>
                    </div>
                </div>
                <div class="h-[0vh]"></div>
                <div class="w-[100%] flex justify-between bg-black">
                    <div class="flex flex-col justify-center gap-5 pb-2 px-[3vw]">
                        <h2 class="text-6xl text-text_blue">Framework</h2>
                        <h3 class="align-middle leading-[1.1] text-[2.5rem] text-wrap">I chose React to develop this site for the ease of getting a modern, responsive, and scaleable user interface.</h3>
                        <h3 class="align-middle leading-[1.1] text-[2.5rem] text-wrap">Compared to my experiences with technologies like EJS or Handlebars React allowed me to bring this site to production much quicker than expected.</h3>
                    </div>
                    <img class="h-auto w-[30vw]" src={react} alt="React"></img>
                </div>
            </div>
            <div class="h-[6vh]"></div>
            <Footer />
        </div>
    );
}
