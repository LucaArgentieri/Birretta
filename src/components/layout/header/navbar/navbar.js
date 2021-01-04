import React from 'react'
import { Link } from "react-router-dom";
export default function navbar() {
    return (
        <div className="Header">
            <div className="navbar__container">
                <Link to="/"><h1>Birretta</h1></Link>
                <ul>
                    <li><Link to="drinks">Beers</Link></li>
                    <li><Link to="ingredients">Ingredients</Link></li>
                    <li><Link to="wethinkaboutit">We'll think about it</Link></li>
                </ul>
            </div>
        </div>

    )
}
