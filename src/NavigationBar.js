import React from 'react'
import { Link } from 'react-router-dom';
import history from './History'
import { BiHomeHeart} from 'react-icons/bi'
import { ImExit } from 'react-icons/im'
import { FaFilm } from 'react-icons/fa'
import { FaRegNewspaper } from 'react-icons/fa'


export default function NavigationBar() {

    let handleUserLogout = (e) => {
        localStorage.clear()
        history.push("/")
    }

    return(
        <div className="navBar">
            <Link to="/dash/home">
                <BiHomeHeart className="nav-icons" id="home"/>
            </Link>
            <div id="navbar-sub">
                <Link to="/dash/shows">
                    <FaFilm className="nav-icons" id="movies"  />
                </Link>
                <Link to="/dash/news">
                    <FaRegNewspaper className="nav-icons" id="news" />
                </Link>
            </div>
            <ImExit className="nav-icons" id="exit" onClick={(e) => handleUserLogout(e)}/>
        </div>
    )
}