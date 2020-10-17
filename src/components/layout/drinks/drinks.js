import React from 'react'
import './drinks.scss'


class Drinks extends React.Component{
    state = {
        loading : true,
        drink : null,
        img : null
    }

    async componentDidMount() {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({drink: data.drinks[0].strDrink , loading : false})
        this.setState({img: data.drinks[0].strDrinkThumb})
    }

    render(){

        if(this.state.loading) {
            return <p>loading...</p>
        }

        if(!this.state.drink) {
            return <p>Didn't get a drink</p>
        }

        return(
            <div>
                <div><p>{this.state.drink}</p><img alt="" src={this.state.img}></img></div>
                
            </div>
        )

    }
    
    
}

export default Drinks