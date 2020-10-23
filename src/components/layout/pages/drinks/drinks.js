import React, { Component } from 'react'
import DrinksContainer from './drinksContainer/drinksContainer'

import axios from 'axios'


class Drinks extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            drinksItems: []
        }
    }
    // res.data

    componentDidMount() {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
            .then(res => 
                this.setState({ drinksItems: res.data })
            )
            .then(res => console.log(this.state.drinksItems))

            

    }
    render(){
        if (this.state.loading) {
            return <p>loading...</p>
        }

        if (!this.state.drinks) {
            return <p>Didn't get a drink</p>
        } else {
        return(
            <DrinksContainer drinks={this.state.drinksItems} />
        )
    }
    }
}


export default Drinks