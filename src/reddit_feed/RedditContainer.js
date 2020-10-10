import React, { useState } from 'react'
import './Reddit.css'
import RedditForm from './RedditForm'
import { FiSearch } from 'react-icons/fi'

export default function RedditContainer() {
    const [subredditValue, setSubredditValue] = useState('webdev')
    const [isFormDisplay, setIsFormDisplay] = useState(false)


    const searchReddit = (value) => {

    }

    let redditForm;
    if (isFormDisplay) redditForm = <RedditForm search={searchReddit} updateFormDisplay={setIsFormDisplay}/>;

    return(
        <div>
            <div className="reddit-header">
                <p id="header">Reddit - { subredditValue }</p>
                <FiSearch id="search-icon" onClick={() => setIsFormDisplay(!isFormDisplay)}/>
                <hr id="hr"/>
            </div>
            { redditForm }
        </div>
    )
}