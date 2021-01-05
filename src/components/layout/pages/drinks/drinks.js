import React, { useEffect, useState } from 'react'
import './drink.scss'
import DrinksItem from './drinksItem/drinksItem'
import { useFetch } from './drinksFetch/drinksFetch'
import InfiniteScroll from 'react-infinite-scroll-component'



function Drinks() {

    const [page, setPage] = useState(1)


    let url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=30`

    const { isLoading, beerData } = useFetch(url)


    //problema aggiornamento componente
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])






    if (isLoading) {
        return (
            <div className="loadingContainer">
                <p className="loading">Loading ...</p>
            </div>
        )
    }

    return (
        <div>
            <div>
                <InfiniteScroll className="beersContainer" dataLength={beerData.length} next={setPage(page + 1)} hasMore={true}>
                    {beerData.map((product) => {
                        return <DrinksItem key={product.id} {...product} />
                    })
                    }
                </InfiniteScroll>

            </div>
        </div>
    )
}








export default Drinks

