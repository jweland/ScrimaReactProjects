import padsData from "./pads"
import React from "react"
import Pad from "./Pad.jsx"

export default function App(props) {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */
    const [pads, setPad] = React.useState(padsData)

    const darkMode = props.darkMode ? "#222222" : "#cccccc"

    const buttonElement = pads.map(pad => (
      <Pad key={pad.id} color={pad.color} on={pad.on}/>
    ))

    return (
        <main>
            <div className="pad-container">
                {buttonElement}
            </div>
        </main>
    )
}