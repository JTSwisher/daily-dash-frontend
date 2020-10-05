import  React, {useState, useEffect} from 'react'
import { FaSearch } from 'react-icons/fa'
import { tvSearch, movieSearch } from './GetShows'

export default function ShowsForm(props) {
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('')

    const type = {
        "tvSearch": tvSearch,
        "movieSearch": movieSearch
    }

    useEffect(() => {
        props.category === 'movie' ? setCategory("movieSearch") : setCategory("tvSearch")
    }, [props.category])
    
    let handleFormSubmit = e => {
        e.preventDefault();
        fetch(type[`${category}`](encodeURIComponent(query)))
        .then(res => res.json())
        .then(res => props.search(res))
        .then(setQuery(''))
    }

    return(
        <form className="shows-form" onSubmit={e => handleFormSubmit(e)}>
            <input id="shows-input" value={query} onChange={e => setQuery(e.target.value)}></input>
            <button type="submit" id="shows-button-wrapper"><FaSearch id="shows-form-submit-icon" /></button>
        </form>
    )
}