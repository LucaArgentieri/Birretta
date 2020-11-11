import React from 'react'
import { Component } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";

import axios from 'axios';

import DrinksItem from './drinksItem/drinksItem'
import './drink.scss'


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
            .then(res => {
                console.log(res.data.data)
                this.setState({beerData: res.data.data, isLoading: false})
            })
            .catch(e => {
                console.log(e);
                return e;
            });
    }

    render() {
        const { beerData, isLoading } = this.state;

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
                    {beerData.filter(item => item.labels).map((drinkProp) =>
                        <DrinksItem key={drinkProp.id} name={drinkProp.name} img={drinkProp.labels.medium} />)
                    }
                </div>
            </div>
        )
    }

}


export default Drinks

