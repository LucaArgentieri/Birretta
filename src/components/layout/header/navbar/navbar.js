import React from 'react'
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { IoMdBeer } from 'react-icons/io'

export default function navbar() {
    return (
        <div className="Header">
            <div className="navbar__container">
                <Link to="/"><h1><IoMdBeer size="25px" />Birretta</h1></Link>
                <ul>
                    <li><Link to="beers">Beers</Link></li>
                    <li><Link to="randombeer">Random Beer</Link></li>
                    <li>
                        <form action="">
                            <input type="text" />
                        </form>
                    </li>
                    <li>
                        <button><FaSearch size='25px' /></button>
                    </li>
                </ul>
            </div>
        </div>

    )
}
