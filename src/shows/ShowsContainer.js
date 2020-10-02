import React, {useState, useEffect} from 'react';
import './Shows.css'
import ShowsForm from './ShowsForm'
import DisplayShows from './DisplayShows'
const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_API_KEY 

export default function ShowsContainer() {
    const [shows, setShows] = useState([])
    const [categorySelected, setCategorySelected] = useState('movie')
    
    useEffect(() => { //temporary for testing content for rendering and styling
       
        fetch(`https://api.themoviedb.org/3/${categorySelected}/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(res => setShows(shows.concat(res["results"])))
    }, [categorySelected])

    let categoryState = (e) => { 
        setShows([])
        setCategorySelected(e)
    }

    let movies = (categorySelected === 'movie') ? <p id="shows-header-title-1" onClick={ () => categoryState('movie')} style={{color: '#77A6F7'}}>Movies</p> 
    : <p id="shows-header-title-1" onClick={ () => categoryState('movie')}>Movies</p>;

    let tv = (categorySelected === 'tv') ? <p id="shows-header-title" onClick={ () => categoryState('tv')} style={{color: '#77A6F7'}}>TV</p> 
    : <p id="shows-header-title" onClick={ () => categoryState('tv')}>TV</p>


    return(
        <div className="shows-page-container">
            <div className="shows-header">
                <div className="shows-header-title">
                        { movies }
                        { tv }
                </div>
                <div className="shows-header-form">
                    <ShowsForm />
                </div>
            </div>
            <DisplayShows shows={shows}/>
        </div>
    )

}
