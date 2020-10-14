import React, { useState } from 'react'

export default function NewsFilterForm(props) {
    const [query, setQuery] = useState('')

    const handleInputChange = (e) => {
        setQuery(e.target.value)
        props.filterCallback(query)
    }

    return(
        <form className="news-form" onSubmit={e => e.preventDefault()}>
            <input id="news-input" value={query} onChange={(e) => handleInputChange(e)}placeholder="Filter.."/>
        </form>
    )
}