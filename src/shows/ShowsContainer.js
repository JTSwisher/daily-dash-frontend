import React from 'react';
import './Shows.css'
import ShowsForm from './ShowsForm'

export default function ShowsContainer() {

    //Use themoviedb api to fetch trending movies if possible. Also search for specific movies
    //on movie click hit Utelly to find locations to watch
    return(
        <div className="shows-container">
            <div className="shows-header">
                <div className="shows-header-title">
                <p id="shows-header-title">Shows</p>
                </div>
                <div className="shows-header-form">
                    <ShowsForm />
                </div>
            </div>
        </div>
    )

}