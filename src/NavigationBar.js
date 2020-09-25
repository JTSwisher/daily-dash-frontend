import React from 'react'

import { BiHomeHeart} from 'react-icons/bi'
import { FaRegSun } from 'react-icons/fa'
import { FaFilm } from 'react-icons/fa'
import { FaRegNewspaper } from 'react-icons/fa'
import { FaHackerNewsSquare } from 'react-icons/fa'


export default function NavigationBar() {
    return(
        <div className="navBar">
            <BiHomeHeart className="nav-icons" id="home"/>
            <FaFilm className="nav-icons" id="movies"  />
            <FaRegNewspaper className="nav-icons" id="news" />
            <FaHackerNewsSquare className="nav-icons" id="hacker-news" />
            <FaRegSun className="nav-icons" id="settings" />
        </div>
    )
}