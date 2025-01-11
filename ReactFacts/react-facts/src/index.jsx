import { createRoot } from "react-dom/client";
import { Fragment } from "react";

const root = createRoot(document.getElementById("root"))
root.render(
    <TempName />
)

function TempName(){
    return (
    <main className="body">
        <img src="src\react-logo.jpg" width="40" alt="React Logo"/>
        <h1 className="h1">Fun Facts About React!</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
)
}