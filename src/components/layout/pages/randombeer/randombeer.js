import React from 'react'
import { useFetch } from '../drinks/drinksFetch/drinksFetch'
import BeerTemplate from '../../beerTemplate/beerTemplate'

function RandomBeer() {


    let url = `https://api.punkapi.com/v2/beers/random`

    const { isLoading, beerData } = useFetch(url)




    if (isLoading) {
        return (
            <div className="loadingContainer">
                <p className="loading">Loading ...</p>
            </div>
        )
    }

    return (
        <div className="beersContainerSingle">
            {beerData.map((beer) => {
                return <BeerTemplate key={beer.id} {...beer} />
            })
            }

        </div>
    )
}

export default RandomBeer