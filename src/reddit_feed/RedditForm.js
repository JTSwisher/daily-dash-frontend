import React, {useState} from 'react'
import { BsPlusCircle } from 'react-icons/bs'

export default function RedditForm(props) {
    const [query, setQuery] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        props.search(query)
        props.updateFormDisplay(false)
    }


    return (
        <div className="reddit-form-container">
            <form id="reddit-form" onSubmit={(e) => handleFormSubmit(e)}>
                <input id="reddit-input" type="text-area" placeholder="Subreddit..." value={query} onChange={(e) => setQuery(e.target.value)} required></input>
                <button type="submit" id="button-wrapper"><BsPlusCircle id="form-submit-icon" /></button>
            </form>
        </div>
    )
}