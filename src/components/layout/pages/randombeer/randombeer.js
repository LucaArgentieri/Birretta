import React, { useState } from 'react'
import { useFetch } from '../drinks/drinksFetch/drinksFetch'
import BeerTemplate from '../../beerTemplate/beerTemplate'
import './randombeer.scss'

function RandomBeer() {


    let url = `https://api.punkapi.com/v2/beers/random`

    const { isLoading, beerData } = useFetch(url)



    const refresh = () => {
        window.location.reload();
    }




    if (isLoading) {
        return (
            <div className="loadingContainer">
                <p className="loading">Loading ...</p>
            </div>
        )
    }

    return (
        <div className="beersContainerSingle">
            <button onClick={refresh} className="reloadBtn">Not satisfied?</button>

            {beerData.map((beer) => {
                return <BeerTemplate key={beer.id} {...beer} />
            })
            }
        </div>
    )
}

export default RandomBeer