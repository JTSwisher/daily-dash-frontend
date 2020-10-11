import React from 'react'
import Article from './Article'

export default function DisplayNews(props) {
    let articles = props.articles.map((e, i) => <Article key={i} article={e}/>)
    return (
        <div className="news-display">
            { articles }
        </div>
    )
}