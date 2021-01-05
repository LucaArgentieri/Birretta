import React from 'react'
import './drinksItem.scss'


const DrinksItem = ({ name, image_url }) => {
    return (
        <div>
            <a className="card__container" href="g">
                <h3>{name}</h3>
                <img src={image_url} alt="" />
            </a>
        </div>
    )
}

export default DrinksItem