import React from 'react'
import './Reddit.css'
import { FiSearch } from 'react-icons/fi'

export default function RedditContainer() {
    return(
        <div>
            <div className="reddit-header">
                <p id="header">Reddit - </p>
                <FiSearch id="search-icon" />
                <hr id="hr"/>
            </div>

        </div>
    )
}