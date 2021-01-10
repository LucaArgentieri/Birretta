import React, { useEffect } from 'react'
import { useFetch } from '../pages/drinks/drinksFetch/drinksFetch'
import DrinksItem from '../pages/drinks/drinksItem/drinksItem'
import { BiUpArrowAlt } from 'react-icons/bi'




export default function SearchResult() {

    const search = (window.location.href.split('/').pop())

    let url = `https://api.punkapi.com/v2/beers?beer_name=${search}`

    const { isLoading, beerData } = useFetch(url)

    const goUp = () => {
        window.scrollTo(0, 0)
    }

    const checkScroll = () => {
        const goUpClass = document.querySelector('.goUp')
        goUpClass.classList.remove('puff')
    }


    useEffect(() => {

        document.addEventListener('scroll', checkScroll)

        return () => {
            document.removeEventListener('scroll', checkScroll)
        }

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
                {beerData.map((beer) => {
                    return <DrinksItem key={beer.id} {...beer} />

                })
                }
            </div>

            <div className="goUp puff" onClick={goUp}>
                <BiUpArrowAlt size="25px" />
            </div>
        </div>
    )
}
