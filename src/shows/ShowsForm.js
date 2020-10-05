import  React, {useState, useEffect} from 'react'
import { FaSearch } from 'react-icons/fa'

export default function ShowsForm(props) {
    const [query, setQuery] = useState('')
    const [type, setType] = useState('')

    useEffect(() => {
        props.category === 'movie' ? setType("movieSearch") : setType("tvSearch")
    }, [props.category])
    
    let handleFormSubmit = e => {
        e.preventDefault()
        props.search(type, query)
        setQuery('')
    }

    return(
        <form className="shows-form" onSubmit={e => handleFormSubmit(e)}>
            <input id="shows-input" value={query} onChange={e => setQuery(e.target.value)}></input>
            <button type="submit" id="shows-button-wrapper"><FaSearch id="shows-form-submit-icon" /></button>
        </form>
    )

}