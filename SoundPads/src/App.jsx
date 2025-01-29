import padsData from "./pads"
import React from "react"
import Pad from "./Pad.jsx"

export default function App(props) {
    const [pads, setPad] = React.useState(padsData)

    const darkMode = props.darkMode ? "#222222" : "#cccccc"

    function toggle() {
        console.log(Clicked)
    }

    const buttonElement = pads.map(pad => (
      <Pad toggle={toggle} key={pad.id} color={pad.color} on={pad.on}/>
    ))

    return (
        <main>
            <div className="pad-container">
                {buttonElement}
            </div>
        </main>
    )
}