import React, {useState, useEffect} from 'react';
import './Shows.css'
import ShowsForm from './ShowsForm'
import DisplayShows from './DisplayShows'
import { popularMovies, popularTV } from './GetShowsUrls'
import { FaArrowLeft, FaArrowRight} from 'react-icons/fa'


export default function ShowsContainer() {
    const [shows, setShows] = useState([])
    const [mainCategorySelected, setMainCategorySelected] = useState('movie')
    const [fetchUrl, setFetchUrl] = useState('movie')
    const [page, setPage] = useState(1)

    const type = {
        "movie": popularMovies,
        "tv": popularTV,
    }
    
    useEffect(() => { 
        console.log('firing')
        fetch(type[`${fetchUrl}`](page))
        .then(res => res.json())
        .then(res => setShows(() => [...res["results"]]))
    }, [mainCategorySelected, page]);

    let handleCategoryStateChange = (c) => { 
        setShows(() => []);
        setPage(1)
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
                <div className="show-page-selector" style={{display: (shows.length <= 15 ? 'none' : '')}}>
                    <FaArrowLeft id="pagination-icon" style={{display:(page === 1 ? 'none' : '')}} onClick={() => setPage(page - 1)}/>
                    <FaArrowRight id="pagination-icon" onClick={() => setPage(page + 1)}/>
                </div>
            </div>
            <DisplayShows shows={shows} />
        </div>
    )

}
