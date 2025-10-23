// import "./Soundpad.css"
import padData from "./pads.js"
import React from "react"
import Pad from "./components/Pad.jsx"

export default function App({darkmode}) {
    const [pads, setPads] = React.useState(padData)
    const styles = { 
        backgroundColor: darkmode ? "#222222" : "#FFFFFF",
    }
    function handleClick(id){
        setPads(prevPads => prevPads.map(pad => {
            return pad.id === id ? {...pad, on: !pad.on} : pad
        }))
    }

    const padButtons = pads.map(pad => (
        // Here, in the style attribute, we are putting an obj of styles
        // <button key={pad.id} style={styles}></button>
        <Pad 
            key={pad.id}
            {...pad}
            toggle={handleClick}
        />
    ))

    return (
        <main>
            <div className="pad-container">
                {padButtons}
            </div>
        </main>
    )
}
