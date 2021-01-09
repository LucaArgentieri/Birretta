import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../drinks/drinksFetch/drinksFetch'
import './beer.css'


export default function Beer() {

    const { id } = useParams()


    let url = `https://api.punkapi.com/v2/beers/${id}`


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
                return (
                    <div key={id} className="beerTemplate">
                        <div className="flex">
                            <div key={id}>
                                <h2 >{beer.name}</h2>
                                <p>{beer.description}</p>
                                <h3>Abv {beer.abv}%</h3>
                                <ul>{beer.food_pairing.map((food, index) => {
                                    return <li key={index}> {food}</li>
                                })}</ul>
                                <h3>Brewers Tips (Just for Brewers)</h3>
                                <p>{beer.brewers_tips}</p>
                            </div>
                        </div>
                        <div className="flex_c">
                            <img src={beer.image_url} alt={beer.name} />
                        </div>
                    </div>



                )
            })
            }


        </div >
    )


}

