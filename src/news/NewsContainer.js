import React from 'react'
import './News.css'
import NavigationBar from '../NavigationBar'

export default function NewsContainer() {
    return (
        <>
        <NavigationBar />
        <div className="news-page-container">
            <div className="news-header">
                <div className="news-header-categories">
                    <p id="news-header-category">General</p>
                    <p id="news-header-category">Technology</p>
                    <p id="news-header-category">Business</p>
                    <p id="news-header-category">Science</p>
                    <p id="news-header-category">Sports</p>
                    <p id="news-header-category">Health</p>
                </div>
            </div>
        </div>
        </>
    )
}