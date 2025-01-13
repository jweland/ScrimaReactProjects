import { createRoot } from "react-dom/client";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";

const root = createRoot(document.getElementById("root"))

function Page(){
    return (
        <>
            <NavBar />
            <Main />
        </>
    )
}

root.render(
    <Page />
)
