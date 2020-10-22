import React, { Component } from 'react'
import DrinksContainer from './drinksContainer/drinksContainer'

import axios from 'axios'


class Drinks extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            drinks: [
                {   
                    id: null,
                    strDrink: null,
                    strDrinkThumb: null
                    
                }
            ]
        }
    }


    componentDidMount() {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
            .then(res => this.setState({ drinks: res.data }))
            console.log(this.state.drinks)
            // .then(res => { 
            //     console.log(res.data);
            //     const datas = res.data
            //     // this.setState({drink: datas.drinks[0].strDrink , loading : false})
            //     // this.setState({img: datas.drinks[0].strDrinkThumb})
            //     console.log(datas.drinks[0])
            // }, error => {
            //     console.log(error);
            // })
            // )

    }
    render(){
        if (this.state.loading) {
            return <p>loading...</p>
        }

        if (!this.state.drinks) {
            return <p>Didn't get a drink</p>
        } else {
        return(
            <DrinksContainer drinks={this.state.drinks} />
        )
    }
    }
}


export default Drinks