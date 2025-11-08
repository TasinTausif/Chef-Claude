import React from "react"
// import "./Counter.css"
import CountC from "./components/Count"

export default function() {
    const [count, setCount] = React.useState(0)
    /**
     * Here, passing a callback function will allow us to use the previous value of state whereas stateFunc wont allow that
     * Not ideal to use var++ or ++var here
     */

    // working on previous state value
    function add() {
        setCount(prevCount=> prevCount + 1)
        setCount(prevCount=> prevCount + 1)
        setCount(prevCount=> prevCount + 1)
    }

    // Passing new version of state directly into state func
    function subtract() {
        setCount(count - 1)
        setCount(count - 1)
        setCount(count - 1)
    }

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
                    <CountC number={count} />
                <button className="plus" onClick={add} aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
