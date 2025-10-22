import React from "react"
export default function({id, color, on}) {
    // Calling state in every child is known as derived state and it is not recommended
    const [padClick, setPadClick] = React.useState(on)

    function toggle() {
        setPadClick(prevPadClick => !prevPadClick)
    }

    return (
        <button key={id} style={{ backgroundColor:color }} className={padClick ? "on" : ""} onClick={toggle}></button>
    )
}