import React from 'react'

export default function Article(props) {


    return (
        <div className="article">
            <div id="image-container">
                <a href={props.article.url} target="_blank" rel="noopener noreferrer"><img className="article-image" src={props.article.urlToImage } /></a>
            </div>
            <p>{props.article.title.slice(0, 48)}...</p>
        </div>
    )
}