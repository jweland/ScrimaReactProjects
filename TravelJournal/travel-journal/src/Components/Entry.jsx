export default function Entry(props){
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" 
                src= {props.img.src}
                alt= {props.img.alt} 
                />
            </div>    
            <div className="info-container">
                <img className="pinpoint" src="src/images/pinpoint.png" alt="pinpoint"/>
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div> 
        </article>
    )
}