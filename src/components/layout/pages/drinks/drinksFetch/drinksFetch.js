import { useState, useEffect, useCallback } from 'react';


export const useFetch = (url) => {
    const [beerData, setBeerData] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const getData = useCallback(async () => {
        const response = await fetch(url)
        const beerData = await response.json()

        setBeerData(beerData)
        setIsLoading(false)


    }, [url])



    useEffect(() => {
        getData()


    }, [url, getData])

    return { isLoading, beerData };


}