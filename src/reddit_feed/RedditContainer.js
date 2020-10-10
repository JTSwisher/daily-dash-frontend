import React, { useState, useEffect } from 'react'
import './Reddit.css'
import RedditForm from './RedditForm'
import DisplayRedditResults from './DisplayRedditResults'
import { FiSearch } from 'react-icons/fi'

export default function RedditContainer() {
    const [subredditValue, setSubredditValue] = useState('webdev')
    const [isFormDisplay, setIsFormDisplay] = useState(false)
    const [subRedditResults, setSubRedditResults] = useState([])

    const searchReddit = (value) => {
        setSubredditValue(value)
    }

    useEffect(() => {
        fetch(`https://www.reddit.com/r/${subredditValue}.json`)
        .then(res => res.json())
        .then(res => {
            setSubRedditResults(res.data.children)
        })

    }, [subredditValue])

    let redditForm;
    if (isFormDisplay) redditForm = <RedditForm search={searchReddit} updateFormDisplay={setIsFormDisplay}/>;

    return(
       <>
            <div className="reddit-header">
                <p id="header">Subreddit - { subredditValue }</p>
                <FiSearch id="search-icon" onClick={() => setIsFormDisplay(!isFormDisplay)}/>
                <hr id="hr"/>
            </div>
            { redditForm }
            <div className="reddit-display">
                <DisplayRedditResults results={subRedditResults} />
            </div>
        </>
    )
}