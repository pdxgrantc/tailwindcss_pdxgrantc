import React from 'react'

export default function UnpurchasedItem({ item, toggleBought }) {
    function HandleBoughtClick() {
        toggleBought(item.id)
    }

    return (
        <div>
            <label>
                {item.title}
                <input type="checkbox" checked={item.complete} onChange={HandleBoughtClick} />
            </label>
        </div>
    )
}
