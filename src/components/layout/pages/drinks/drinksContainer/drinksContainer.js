import React, { Component } from 'react'
import './drinksContainer.scss'
import DrinksComponent from './drinksComponent/drinksComponent';
import PropTypes from 'prop-types'


class DrinksContainer extends Component {

    render(){
        return this.state.drinksItems.map((drinksItem) => ( 
        <DrinksComponent key={drinksItem.id} drinksItem={drinksItem} />)
        )
    }

}

DrinksContainer.propTypes = {
    drinks: PropTypes.array.isRequired

}

export default DrinksContainer