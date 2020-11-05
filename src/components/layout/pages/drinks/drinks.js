import React from 'react'
import { Component } from 'react'

import DrinksItem from './drinksItem/drinksItem'

class Drinks extends Component{
    constructor(props){
        super(props)

        this.state = {
            data: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
          .then(response => response.json())
          .then(data => this.setState({ data: data.drinks, isLoading: false }));
    }

    render(){
        const { data, isLoading } = this.state;
        console.log(data)

         
    if (isLoading) {
        return <p>Loading ...</p>;
    }

        return(
            <div>
                {data.map((drinkProp) => 
                    <DrinksItem key={drinkProp.idDrink} name={drinkProp.strDrink} img={drinkProp.strDrinkThumb}/>)
                }
            </div>
        )
    }

}


export default Drinks