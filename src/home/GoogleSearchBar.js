import React, { useState } from 'react';

export default function GoogleSearchbar() {

    const [query, setQuery] = useState('')


    return(
        <form action="http://www.google.com/search" method="get" target="_blank" onSubmit={() => setQuery('')}>
            <input type="text" name="q" value={ query } onChange={(e) => setQuery(e.target.value)}/>
            <input type="submit" value="search" />
        </form>
    )
}