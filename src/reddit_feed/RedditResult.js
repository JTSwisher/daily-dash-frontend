import React from 'react'

export default function RedditResult(props) {
    return (
        <li className="result" >
            <a id="result" target="_blank" rel="noopener noreferrer" href={props.result.data.url}>{props.result.data.title}</a>
        </li>
    )
}

