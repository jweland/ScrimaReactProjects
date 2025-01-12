import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"))
root.render(
    <TempName />
)

function Header() {
    return (
        <header>
            <h1 className="h1">Fun Facts About React!</h1>
        </header>
    )
}

function TempName(){
    return (
        <>
            <img src="src\react-logo.jpg" width="40" alt="React Logo"/>
            <Header />
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </>
    )
}