import React from 'react'
import { Component } from 'react'
import axios from 'axios';

import DrinksItem from './drinksItem/drinksItem'


class Drinks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beerData: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        const apiKey =  process.env.REACT_APP_BEER_API_KEY
        axios.get('https://sandbox-api.brewerydb.com/v2/beers/?key=' + apiKey)
            .then(data => {
                console.log(data.data.data[0].labels)
                this.setState({beerData: data.data.data, isLoading: false})
            })
            .catch(e => {
                console.log(e);
                return e;
            });
    }

    render() {
        const { beerData, isLoading } = this.state;


        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <div>
                {beerData.map((drinkProp) =>
                    <DrinksItem key={drinkProp.id} name={drinkProp.name} img={drinkProp.labels} description={drinkProp.description} />)
                }
            </div>
        )
    }

}


export default Drinks

