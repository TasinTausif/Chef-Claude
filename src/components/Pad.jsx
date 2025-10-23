// import React from "react"
export default function(props) {
    // Calling state in every child is known as derived state and it is not recommended
    // const [padClick, setPadClick] = React.useState(on)

    // function toggle() {
    //     setPadClick(prevPadClick => !prevPadClick)
    // }

    return (
        <button key={props.id} style={{ backgroundColor:props.color }} className={props.on ? "on" : ""} onClick={() => props.toggle(props.id)}></button>
    )
}