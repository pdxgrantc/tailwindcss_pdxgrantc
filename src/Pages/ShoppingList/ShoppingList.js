import React from 'react'

import Header from '../../Static/partials/Header'
import Footer from '../../Static/partials/Footer'

import CurrentItems from './partials/CurrentItems'
import NewItem from './partials/NewItem'

export default function ShoppingList() {
    return (
        <>
            <div class="m-auto bg-main_bg_color text-text_white">
                <Header />
                <div class="w-[85vw] m-auto flex gap-[4vw]">
                    <CurrentItems />
                    <NewItem />
                </div>
                <Footer />
            </div>
        </>
    )
}
