import React, {useState} from 'react';
import { FaGoogle } from 'react-icons/fa'

export default function GoogleSearchbar() {

    const [query, setQuery] = useState('')

    return(
        <form className="google-search-form" action="http://www.google.com/search?q" method="get" target="_blank" onSubmit={() => setTimeout(() => setQuery(''), 1500)}>
            <input id="google-search-input" type="text" placeholder="Search Google.." name="q" value={ query } onChange={(e) => setQuery(e.target.value)} />
            <button type="submit" id="google-button-wrapper"><FaGoogle id="google-search-icon"/></button>
        </form>
    )
}