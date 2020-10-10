import React from 'react'

export default function RedditResult(props) {
    return (
        <li className="result" >
            <a id="result" target="_blank" rel="noopener noreferrer" href={"https://www.reddit.com" + props.result.data.permalink}>{props.result.data.title}</a>
        </li>
    )
}

