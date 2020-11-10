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


        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://sandbox-api.brewerydb.com/v2/beers/?key=' + process.env.REACT_APP_BEER_API_KEY
        fetch(proxyUrl + targetUrl)
            .then(blob => blob.json())
            .then(data => {
                console.log(data.data)
                this.setState({data: data.data, isLoading: false})
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
                    <DrinksItem key={drinkProp.id} name={drinkProp.name} img={drinkProp.icon}  description={drinkProp.description} />)
                }
            </div>
        )
    }

}


export default Drinks

