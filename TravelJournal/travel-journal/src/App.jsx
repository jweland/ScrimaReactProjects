import Header from "./Components/Header"
import Entry from "./Components/Entry"
import data from "./data"

export default function App() {
    const entries = data.map(entry => 
    {
        return <Entry 
        img={{src: entry.img.src, alt: entry.img.alt}}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
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