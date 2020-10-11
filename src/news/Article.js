import React from 'react'
import { MdBrokenImage } from 'react-icons/md'

export default function Article(props) {

    let image = props.article.urlToImage === null ? <MdBrokenImage id="no-image-icon" /> : <img className="article-image" src={props.article.urlToImage } />
    
    return (
        <div className="article">
            <div id="image-container">
                <a href={props.article.url} target="_blank" rel="noopener noreferrer">{ image }</a>
            </div>
            <a id="article-title" href={props.article.url} target="_blank" rel="noopener noreferrer">{props.article.title.slice(0, 48)}...</a>
        </div>
    )
}