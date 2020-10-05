import React, {useState, useEffect} from 'react';
import './Shows.css'
import ShowsForm from './ShowsForm'
import DisplayShows from './DisplayShows'

import { popularMovies, popularTV } from './GetShows'


export default function ShowsContainer() {
    const [shows, setShows] = useState([])
    const [categorySelected, setCategorySelected] = useState('movie')
    const [url, setUrl] = useState('movie')
    

    const type = {
        "movie": popularMovies,
        "tv": popularTV,
    }
    
    useEffect(() => { 
        console.log('firing')
        fetch(type[`${url}`]())
        .then(res => res.json())
        .then(res => setShows(() => [...res["results"]]))
    }, [categorySelected]);

    let categoryState = (c) => { 
        setShows(() => []);
        setUrl(c);
        setCategorySelected('');
        setTimeout(() => {
            setCategorySelected(c)
        }, 100);
    }

    let handleSearch = (res) => {
        setShows(() => []);
        setShows(() => [...res["results"]])
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
            <DisplayShows shows={shows} />
        </div>
    )

}
