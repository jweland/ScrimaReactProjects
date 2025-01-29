import padsData from "./pads"
import React from "react"
import Pad from "./Pad.jsx"

export default function App(props) {
    const [pads, setPad] = React.useState(padsData)

    const darkMode = props.darkMode ? "#222222" : "#cccccc"

    function toggle(id) {
        setPad(prevPads => prevPads.map(item => {
            return item.id === id ? {...item, on: !item.on} : item
        }))
    }

    const buttonElement = pads.map(pad => (
      <Pad toggle={toggle} id={pad.id}key={pad.id} color={pad.color} on={pad.on}/>
    ))

    return (
        <main>
            <div className="pad-container">
                {buttonElement}
            </div>
        </main>
    )
}