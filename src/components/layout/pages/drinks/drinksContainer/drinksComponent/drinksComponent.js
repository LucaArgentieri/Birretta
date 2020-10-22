import React from 'react';
import PropTypes from 'prop-types'


class DrinksComponent extends React.Component {

    render() {


        return (
            <div>
                <div id={this.state.id}><p>{this.state.strDrink}</p><img alt="" src={this.state.strDrinkThumb}></img></div>
            </div>
        )

    }
}

DrinksComponent.propTypes = {
    drink: PropTypes.object.isRequired,
}

export default DrinksComponent