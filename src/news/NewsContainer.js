import React, {useState, useEffect} from 'react'
import './News.css'
import NavigationBar from '../NavigationBar'
import NewsFilterForm from './NewsFilterForm'
import DisplayNews from './DisplayNews'

const API_KEY = process.env.REACT_APP_NEWS_API_KEY

export default function NewsContainer() {
    const [categorySelected, setCategorySelected] = useState('general')
    const [articles, setArticles] = useState([])
    const [filterQuery, setFilterQuery] = useState('')

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${categorySelected}&pageSize=80&apiKey=${API_KEY}`)
        .then(res => res.json())
        .then(res => {
            setArticles(res.articles)
        })
        .catch(error => console.log(error))
    }, [categorySelected])

    const handleCategoryStateChange = (value) => {
        setCategorySelected(value)
    }

    return(
        <>
            <NavigationBar />
            <div className="news-page-container">
                <div className="news-header">
                    <div className="news-header-categories">
                        <p id="news-header-category" onClick={ () => handleCategoryStateChange('general')} style={{color: (categorySelected === 'general' ? '#77A6F7' : 'white') }}>General</p>
                        <p id="news-header-category" onClick={ () => handleCategoryStateChange('technology')} style={{color: (categorySelected === 'technology' ? '#77A6F7' : 'white') }}>Technology</p>
                        <p id="news-header-category" onClick={ () => handleCategoryStateChange('business')} style={{color: (categorySelected === 'business' ? '#77A6F7' : 'white') }}>Business</p>
                        <p id="news-header-category" onClick={ () => handleCategoryStateChange('science')} style={{color: (categorySelected === 'science' ? '#77A6F7' : 'white') }}>Science</p>
                        <p id="news-header-category" onClick={ () => handleCategoryStateChange('sports')} style={{color: (categorySelected === 'sports' ? '#77A6F7' : 'white') }}>Sports</p>
                        <p id="news-header-category" onClick={ () => handleCategoryStateChange('health')} style={{color: (categorySelected === 'health' ? '#77A6F7' : 'white') }}>Health</p>
                    </div>
                    <div className="news-header-form">
                        <NewsFilterForm filterCallback={setFilterQuery}/>
                    </div>
                </div>
                <DisplayNews articles={articles} filterQuery={filterQuery}/>
            </div>
        </>
    )
}