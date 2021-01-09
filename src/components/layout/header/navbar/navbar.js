import React from 'react'
import './navbar.css'
import Searchbar from './searchbar/searchbar'
import { Link } from "react-router-dom";
import { IoMdBeer } from 'react-icons/io'

export default function navbar() {
    return (
        <div className="Header">
            <div className="navbar__container">
                <Link to="/"><h1><IoMdBeer size="25px" />Birretta</h1></Link>
                <Searchbar />
                <ul>
                    <li><Link to="/beers">Beers</Link></li>
                    <li><Link to="/randombeer">Random Beer</Link></li>
                </ul>
            </div>
        </div>

    )
}
