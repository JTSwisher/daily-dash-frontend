import React, {useState} from 'react'
import { FaTimes } from 'react-icons/fa'


export default function Show(props){
    const [display, setDisplay] = useState(false)
    const {show} = props
   
    let handleShowDetailDisplay = () => {
        setDisplay(!display);
        props.overlayCallback(!props.overlayState)
    }

    let name = show.title ? show.title : show.name;

    return(
        <>
        <div id="show-details" style={{display: (display ? '' : 'none')}}>
            <div id="show-details-header-group">
                <img  src={`https://image.tmdb.org/t/p/w200/${show.poster_path}`} alt="" id="show-details-image"/>
                <div id="header-details">
                    <FaTimes id="show-details-exit-icon" onClick={() => handleShowDetailDisplay()}/>
                    <p id="show-details-title"><strong>Title:</strong> {name}</p>
                    <p id="show-details-rating"><strong>Rating:</strong> {show.vote_average}/10</p>
                    <p id="show-details-date"><strong>Date:</strong> {new Date(show.release_date).toLocaleDateString()}</p>
                    <form action="http://www.google.com/search?q" method="get" target="_blank">
                        <input type="hidden" name="q" value={name}/>
                        <button id="watch-show-button" type="submit">Watch Now</button>
                    </form>
                </div>
            </div>
            <p id="show-details-description">{show.overview}</p>
        </div>
        <div className="show">
            <p id="show-title">{(name.length >= 20) ? `${name.slice(0,20)}...` : name }</p>
            <img src={`https://image.tmdb.org/t/p/w200/${show.poster_path}`} alt="" id="show-image" onClick={() => handleShowDetailDisplay()}/>
        </div>
        </>
    )
}
