import React, { useState, useEffect } from 'react'
import './Reddit.css'
import RedditForm from './RedditForm'
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

    //create useEffect to fetch reddit data
    //pass data into display data component which passes into data compoennet

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