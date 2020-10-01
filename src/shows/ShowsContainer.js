import React, {useState, useEffect} from 'react';
import './Shows.css'
import ShowsForm from './ShowsForm'
import DisplayShows from './DisplayShows'
const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_API_KEY 

export default function ShowsContainer() {
    const [shows, setShows] = useState([])
    
    useEffect(() => { //temporary for testing content for rendering and styling
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(res => setShows(res["results"]))
    }, [])

        
    
    return(
        
        <div className="shows-page-container">
            <div className="shows-header">
                <div className="shows-header-title">
                <p id="shows-header-title">Shows</p>
                </div>
                <div className="shows-header-form">
                    <ShowsForm />
                </div>
            </div>
            <DisplayShows shows={shows}/>
        </div>
    )

}
