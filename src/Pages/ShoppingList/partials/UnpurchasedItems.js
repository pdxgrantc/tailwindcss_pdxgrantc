import React from 'react'
import Item from './UnpurchasedItem'

export default function UnpurchasedItems({ items, toggleBought }) {
    return (
        items.map(item => {
            return (
                <div class="bg-black px-[2vw] py-[2vh]">
                    <div class="flex justify-between gap-5">
                        <Item key={item.id} toggleBought={toggleBought} item={item} />
                    </div>
                </div>
            )
        })
    )
}