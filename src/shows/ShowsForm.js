import  React, {useState, useEffect} from 'react'
import { FaSearch } from 'react-icons/fa'
import { tvSearch, movieSearch } from './GetShowsUrls'

export default function ShowsForm(props) {
    const [query, setQuery] = useState('')
    const [fetchUrl, setFetchUrl] = useState('')

    const type = {
        "tvSearch": tvSearch,
        "movieSearch": movieSearch
    }

    useEffect(() => {
        props.mainCategory === 'movie' ? setFetchUrl("movieSearch") : setFetchUrl("tvSearch")
    }, [props.mainCategory])
    
    let handleFormSubmit = e => {
        e.preventDefault();
        fetch(type[`${fetchUrl}`](encodeURIComponent(query)))
        .then(res => res.json())
        .then(res => props.setShowState(res["results"].slice(0, 15)))
        .then(setQuery(''))
    }

    return(
        <form className="shows-form" onSubmit={e => handleFormSubmit(e)}>
            <input id="shows-input" value={query} onChange={e => setQuery(e.target.value)} required></input>
            <button type="submit" id="shows-button-wrapper"><FaSearch id="shows-form-submit-icon" /></button>
        </form>
    )
}