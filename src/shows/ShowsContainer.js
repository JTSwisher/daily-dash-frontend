import React, {useState, useEffect} from 'react';
import './Shows.css'
import ShowsForm from './ShowsForm'
import DisplayShows from './DisplayShows'

import { popularMovies, popularTV, tvSearch, movieSearch } from './GetShows'
const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_API_KEY 

export default function ShowsContainer() {
    const [shows, setShows] = useState([])
    const [categorySelected, setCategorySelected] = useState('movie')
    const [url, setUrl] = useState('movie')
    const [query, setQuery] = useState('')

    // use encodeURIComponent('string encode') to convert string into 'string%20'

    const type = {
        "movie": popularMovies,
        "tv": popularTV,
        "tvSearch": tvSearch,
        "movieSearch": movieSearch
    }

    useEffect(() => {
        if (categorySelected === 'movie' && query.length >= 1) setUrl('movieSearch');
        if (categorySelected === 'tv' && query.length >= 1) setUrl('tvSearch');
        if (categorySelected === 'movie' && query.length === 0) setUrl('movie');
        if (categorySelected === 'tv' && query.length === 0) setUrl('tv')
    }, [categorySelected, query])
    
    useEffect(() => { //temporary for testing content for rendering and styling
        fetch(type[`${url}`](query))
        .then(res => res.json())
        .then(res => setShows(shows.concat(res["results"])))
    }, [url, query])

    let categoryState = (c) => { 
        setShows([])
        setQuery('')
        setCategorySelected(c)
        // setTimeout(() => {
        //     setShows([])
        //     setCategorySelected(c)
        // }, 500)
    }

    let handleSearch = (c, q) => {
        setShows([])
        setUrl(c)
        setQuery(q)
    }

    return(
        <div className="shows-page-container">
            <div className="shows-header">
                <div className="shows-header-title">
                    <p id="shows-header-title-1" onClick={ () => categoryState('movie')} style={{color: (categorySelected === 'movie' ? '#77A6F7' : 'white') }}>Movies</p> 
                    <p id="shows-header-title" onClick={ () => categoryState('tv')} style={{color: (categorySelected === 'tv' ? '#77A6F7' : 'white') }}>TV</p> 
                </div>
                <div className="shows-header-form">
                    <ShowsForm category={categorySelected} search={handleSearch}/>
                </div>
            </div>
            <DisplayShows shows={shows} search={handleSearch}/>
        </div>
    )

}
