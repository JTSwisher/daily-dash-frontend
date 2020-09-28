import React from 'react';
import { FaGoogle } from 'react-icons/fa'

export default function GoogleSearchbar() {

    return(
        <form className="google-search-form" action="http://www.google.com/search" method="get" target="_blank" >
            <input id="google-search-input" type="text" name="q" placeholder="Search Google.." />
            <button type="submit" id="google-button-wrapper"><FaGoogle id="google-search-icon"/></button>
        </form>
    )
}