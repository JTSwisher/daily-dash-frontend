import React, {useState, useEffect} from 'react';
import './Shows.css'
import ShowsForm from './ShowsForm'
import DisplayShows from './DisplayShows'

import { popularMovies, popularTV } from './GetShowsUrls'


export default function ShowsContainer() {
    const [shows, setShows] = useState([])
    const [mainCategorySelected, setMainCategorySelected] = useState('movie')
    const [fetchUrl, setFetchUrl] = useState('movie')
    
    

    const type = {
        "movie": popularMovies,
        "tv": popularTV,
    }
    
    useEffect(() => { 
        console.log('firing')
        fetch(type[`${fetchUrl}`]())
        .then(res => res.json())
        .then(res => setShows(() => [...res["results"]]))
    }, [mainCategorySelected]);

    let handleCategoryStateChange = (c) => { 
        setShows(() => []);
        setFetchUrl(c);
        setMainCategorySelected('');
        setTimeout(() => {
            setMainCategorySelected(c)
        }, 100);
    }

    let handleFormSearchResults = (res) => {
        setShows(() => []);
        setShows(() => [...res["results"]])
    }

    return(
        <div className="shows-page-container">
            <div className="shows-header">
                <div className="shows-header-title">
                    <p id="shows-header-title-1" onClick={ () => handleCategoryStateChange('movie')} style={{color: (mainCategorySelected === 'movie' ? '#77A6F7' : 'white') }}>Movies</p> 
                    <p id="shows-header-title" onClick={ () => handleCategoryStateChange('tv')} style={{color: (mainCategorySelected === 'tv' ? '#77A6F7' : 'white') }}>TV</p> 
                </div>
                <div className="shows-header-form">
                    <ShowsForm mainCategory={mainCategorySelected} setShowState={handleFormSearchResults}/>
                </div>
            </div>
            <DisplayShows shows={shows} />
        </div>
    )

}
