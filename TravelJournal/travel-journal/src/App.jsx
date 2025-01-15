import Header from "./Components/Header"
import Entry from "./Components/Entry"
import data from "./data"

export default function App() {
    const entries = data.map((entry) => 
    {
        return <Entry 
        key={entry.id}
        {...entry}
        />
    })

    return (
        <>
            <Header />
            <main className="container">
                {entries}
            </main>
        </>
    )
}