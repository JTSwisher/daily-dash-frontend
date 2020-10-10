import React, {useState} from 'react'

export default function RedditForm(props) {
    const [query, setQuery] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        props.search(query)
        props.updateFormDisplay(false)
    }


    return (
        <div>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <input type="text-area" value={query} onChange={(e) => setQuery(e.target.value)}></input>
            </form>
        </div>
    )
}