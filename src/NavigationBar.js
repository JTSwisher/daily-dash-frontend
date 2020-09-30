import React from 'react'
import { Link } from 'react-router-dom';

import { BiHomeHeart} from 'react-icons/bi'
import { FaRegSun } from 'react-icons/fa'
import { FaFilm } from 'react-icons/fa'
import { FaRegNewspaper } from 'react-icons/fa'
import { FaHackerNewsSquare } from 'react-icons/fa'


export default function NavigationBar() {
    return(
        <div className="navBar">
            <Link to="/dash/home">
                <BiHomeHeart className="nav-icons" id="home"/>
            </Link>
            <Link to="/dash/shows">
                <FaFilm className="nav-icons" id="movies"  />
            </Link>
            <FaRegNewspaper className="nav-icons" id="news" />
            <FaHackerNewsSquare className="nav-icons" id="hacker-news" />
            <FaRegSun className="nav-icons" id="settings" />
        </div>
    )
}