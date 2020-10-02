import React, {useState, useEffect} from 'react';
import './Shows.css'
import ShowsForm from './ShowsForm'
import DisplayShows from './DisplayShows'
const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_API_KEY 

export default function ShowsContainer() {
    const [shows, setShows] = useState([])
    const [categorySelected, setCategorySelected] = useState('movie')

    // break out state into redux?
    //need to handle category color change if search is used, pass calback down to form?
    //need to break out all api calls into seperate file and impot in, use switch statement to determine which one to use? seperate calls one can 
    // be shared for most popular like below passing type var. search needs seperate for either movie or tv search

    //TV: https://api.themoviedb.org/3/search/tv?api_key=4668a91e8c6f6c418f6f0cd556b0e3d4&language=en-US&page=1&query=breaking%20bad&include_adult=false
    //Movie: https://api.themoviedb.org/3/search/movie?api_key=4668a91e8c6f6c418f6f0cd556b0e3d4&language=en-US&query=ava&page=1&include_adult=false
    //Popular: https://api.themoviedb.org/3/${categorySelected}/popular?api_key=${API_KEY}&language=en-US&page=1
    
    useEffect(() => { //temporary for testing content for rendering and styling
        fetch(`https://api.themoviedb.org/3/${categorySelected}/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(res => setShows(shows.concat(res["results"])))
    }, [categorySelected])

    let categoryState = (e) => { 
        setShows([])
        setCategorySelected(e)
    }



    return(
        <div className="shows-page-container">
            <div className="shows-header">
                <div className="shows-header-title">
                    <p id="shows-header-title-1" onClick={ () => categoryState('movie')} style={{color: (categorySelected === 'movie' ? '#77A6F7' : 'white') }}>Movies</p> 
                    <p id="shows-header-title" onClick={ () => categoryState('tv')} style={{color: (categorySelected === 'tv' ? '#77A6F7' : 'white') }}>TV</p> 
                </div>
                <div className="shows-header-form">
                    <ShowsForm />
                </div>
            </div>
            <DisplayShows shows={shows}/>
        </div>
    )

}
