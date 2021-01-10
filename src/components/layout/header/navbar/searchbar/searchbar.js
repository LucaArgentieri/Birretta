import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'


export default function Searchbar() {

    const [inputValue, setInputValue] = useState('')


    const alertInput = () => {
        const inpt = document.querySelector('input')

        inpt.addEventListener('keyup', evt => {
            evt.preventDefault()


            return setInputValue(evt.target.value)


        })

    }




    return (
        <div className="navbar__container">
            <ul>
                <li>
                    <form>
                        <input onKeyUp={() => alertInput()} type="text" />
                    </form>
                </li>
                <li>
                    <Link to={`/search/${inputValue}`}><FaSearch size='25px' /></Link>
                </li>
            </ul>
        </div>
    )
}
