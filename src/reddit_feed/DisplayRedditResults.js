import React from 'react'
import RedditResult from './RedditResult'

export default function DisplayRedditResults(props) {
    let redditResults = props.results.map((e, i) => <RedditResult key={i} result={e} /> )
    return (
        <ul>
            { redditResults }
        </ul>
    )
}