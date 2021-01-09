import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'


export default function Searchbar() {

    const [inputValue, setInputValue] = useState('')


    const alertInput = () => {
        const inpt = document.querySelector('input')

        inpt.addEventListener('keyup', evt => {
            evt.preventDefault()
            console.log(evt.target.value)
            console.log(inputValue)

            return setInputValue(evt.target.value)


        })


    }

    console.log(`This is ${inputValue}`)




    return (
        <div className="navbar__container">
            <ul>
                <li>
                    <form >
                        <input onKeyUp={() => alertInput()} type="text" />
                    </form>
                </li>
                <li>
                    <Link to={inputValue}><FaSearch size='25px' /></Link>
                </li>
            </ul>
        </div>
    )
}
