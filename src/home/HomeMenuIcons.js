import React from 'react';

import { BsCardChecklist } from 'react-icons/bs'
import { FaRedditAlien } from 'react-icons/fa'

export default function HomeMenuIcons(props) {

    const setMainContentIdentifier = (value) => {
        props.setMain(value)
    }

    return(
        <>
        <BsCardChecklist className="menu-icon" onClick={() => setMainContentIdentifier("todos")}/>
        <FaRedditAlien className="menu-icon" onClick={() => setMainContentIdentifier("reddit")}/>
        </>
    )
}