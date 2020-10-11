import React from 'react'
import Article from './Article'

export default function DisplayNews(props) {

    let articles = props.filterQuery !== "" ? props.articles.filter(a => a.title.toLowerCase().includes(props.filterQuery.toLowerCase())) : props.articles
    const finalArticles = articles.map((a, i) => <Article key={i} article={a} />)

    return (
        <div className="news-display">
            { finalArticles }
        </div>
    )
}