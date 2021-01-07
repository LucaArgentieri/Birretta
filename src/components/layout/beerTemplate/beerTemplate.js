import React from 'react'
import './beerTemplate.css'

export default function BeerTemplate({ name, image_url, description, food_pairing, abv, brewers_tips }) {


    return (
        <div>
            <div className="beerTemplate">
                <div className="flex">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <h3>Abv {abv}%</h3>
                    <h3>Food Pairing</h3>
                    <ul>{food_pairing.map((food, index) => {
                        return <li key={index}> {food}</li>
                    })}</ul>
                    <h3>Brewers Tips (Just for Brewers)</h3>
                    <p>{brewers_tips}</p>
                </div>
                <div className="flex_c">
                    <img src={image_url} alt={name} />
                </div>

            </div>
        </div >
    )
}
