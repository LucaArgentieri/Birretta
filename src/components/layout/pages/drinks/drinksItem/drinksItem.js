import React from 'react'
import './drinksItem.scss'
import { Link } from 'react-router-dom'



const DrinksItem = (({ id, name, image_url }) => {
    return (
        <Link to={`/beer/${id}`}>
            <div className="card__container">
                <h3>{name}</h3>
                <img src={image_url} alt="" />
            </div>
        </Link>
    )
})

export default DrinksItem