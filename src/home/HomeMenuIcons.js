import React, {useState} from 'react';
import { BsCardChecklist } from 'react-icons/bs'
import { FaRedditAlien } from 'react-icons/fa'

export default function HomeMenuIcons(props) {
    const [selectedCategory, setSelectedCategory] = useState('todos')

    const setMainContentIdentifier = (value) => {
        setSelectedCategory(value)
        props.setMain(value)
    }

    return(
        <>
        <BsCardChecklist className="menu-icon" onClick={() => setMainContentIdentifier("todos")} style={{color: (selectedCategory === "todos" ? "#77A6F7" : "")}}/>
        <FaRedditAlien className="menu-icon" onClick={() => setMainContentIdentifier("reddit")} style={{color: (selectedCategory === "todos" ? "" : "#77A6F7")}}/>
        </>
    )
}