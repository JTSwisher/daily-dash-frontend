import  React, {useState} from 'react'
import { FaSearch } from 'react-icons/fa'

export default function ShowsForm() {
    const [query, setQuery] = useState('')
    
    let handleSubmit = e => {
        e.preventDefault()
        setQuery('')
    }

    return(
        <form className="shows-form" onSubmit={e => handleSubmit(e)}>
            <input id="shows-input" value={query} onChange={e => setQuery(e.target.value)}></input>
            <button type="submit" id="shows-button-wrapper"><FaSearch id="shows-form-submit-icon" /></button>
        </form>
    )

}