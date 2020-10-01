import  React, {useState} from 'react'
import { FaSearch } from 'react-icons/fa'

export default function ShowsForm() {
    
    return(
        <form className="shows-form">
            <input id="shows-input"></input>
            <button type="submit" id="shows-button-wrapper"><FaSearch id="shows-form-submit-icon" /></button>
        </form>
    )

}