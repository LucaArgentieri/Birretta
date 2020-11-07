import React from 'react'
import { Component } from 'react'

import DrinksItem from './drinksItem/drinksItem'


class Drinks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        // fetch('https://sandbox-api.brewerydb.com/v2/beer/random/?key=' + process.env.REACT_APP_BEER_API_KEY,
        //     {
        //         mode: 'no-cors',
        //     })
        //     .then(response => response.json())
        //     //.then(data => this.setState({ data: data.drinks, isLoading: false }));
        //     .then(data => console.log(data))

        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://sandbox-api.brewerydb.com/v2/beers/?key=' + process.env.REACT_APP_BEER_API_KEY
        fetch(proxyUrl + targetUrl)
            .then(blob => blob.json())
            .then(data => {
                console.log(data);
            })
            .catch(e => {
                console.log(e);
                return e;
            });
    }

    render() {
        const { data, isLoading } = this.state;


        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <div>
                {data.map((drinkProp) =>
                    <DrinksItem key={drinkProp.idDrink} name={drinkProp.strDrink} img={drinkProp.strDrinkThumb} />)
                }
            </div>
        )
    }

}


export default Drinks