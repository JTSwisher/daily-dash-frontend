import React, { useState } from 'react'
import Show from './Show'

export default function DisplayShow(props){
    const [overlayDisplay, setOverlayDisplay] = useState(false)

    let renderShows = props.shows.map((e, i) => <Show show={e} overlayCallback={setOverlayDisplay} overlayState={overlayDisplay}/>)

    return(
        <div className="shows-display" >
            <div className="overlay" style={{display: (overlayDisplay ? '' : 'none')}}></div>
            { renderShows }
        </div>
   )
}
