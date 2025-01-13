import { createRoot } from "react-dom/client";
import NavBar from "./Components/NavBar";
import MainContent from "./Components/MainContent";

const root = createRoot(document.getElementById("root"))

function Page(){
    return (
        <>
            <NavBar />
            <MainContent />
        </>
    )
}

root.render(
    <Page />
)
