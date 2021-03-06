import React, { useEffect, useState } from 'react'
import './drink.css'
import DrinksItem from './drinksItem/drinksItem'
import { useFetch } from './drinksFetch/drinksFetch'
import { BiUpArrowAlt } from 'react-icons/bi'


function Drinks() {

    const [page, setPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(80)


    let url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${postsPerPage}`

    const { isLoading, beerData } = useFetch(url)


    const newRender = () => {
        if (page >= 5) {
            setPage(1)
        } else {
            setPage(page + 1)

        }
        window.scrollTo(0, 0)
    }

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
            <div className="nextPage_container">
                <button className="nextPage" onClick={() => newRender()}>Next page</button>
            </div>

            <div className="goUp puff" onClick={goUp}>
                <BiUpArrowAlt size="25px" />
            </div>
        </div>
    )
}




export default Drinks

