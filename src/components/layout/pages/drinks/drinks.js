import React from 'react'
import axios from 'axios';

import './drink.scss'
import DrinksItem from './drinksItem/drinksItem'
import { useState } from 'react';
import { useEffect } from 'react';


function Drinks() {

    const [beerData, setBeerData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getData = () => {
        //https://punkapi.com/documentation/v2

        axios.get(`https://api.punkapi.com/v2/beers`)
            .then(function (res) {
                console.log(res.data);
                const data = res.data
                setBeerData(data)
                setIsLoading(false)
            })
            .catch(e => {
                console.log(e);
                return e;
            });
    }

    useEffect(() => {
        getData()

    }, [])




    if (isLoading) {
        return (
            <div className="loadingContainer">
                <p className="loading">Loading ...</p>
            </div>
        )
    }



    return (
        <div>
            <div className="beersContainer">
                {beerData.map((drinkProp) =>
                    <DrinksItem key={drinkProp.id} name={drinkProp.name} img={drinkProp.image_url} />)
                }
            </div>
        </div>
    )
}








export default Drinks

