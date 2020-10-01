import React, {useState, useEffect} from 'react'

export default function Show(props){
    const [display, setDisplay] = useState(false)
    const {show} = props
   

    let handleShowDetailDisplay = () => {
        setDisplay(!display);
        props.overlayCallback(!props.overlayState)
       
    }

    return(
        <>
        <div id="show-details" onClick={() => handleShowDetailDisplay()} style={{display: (display ? '' : 'none')}}>
            <img src={`https://image.tmdb.org/t/p/w200/${show.poster_path}`} id="show-details-image"/>
            <p>Rating: {show.vote_average}/10</p>
            <p>Release Date: {new Date(show.release_date).toLocaleDateString()}</p>
            <p id="show-details-description">{show.overview}</p>
        </div>
        <div className="show">
            <p id="show-title">{show.title}</p>
            <img src={`https://image.tmdb.org/t/p/w200/${show.poster_path}`} id="show-image" onClick={() => handleShowDetailDisplay()}/>
        </div>
        </>
    )
}
