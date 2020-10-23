import React from 'react';


class DrinksComponent extends React.Component {

    render() {

        const { idDrink, strDrink, strDrinkThumb } = this.state



        return (
            <div>
                <div id={idDrink}><p>{strDrink}</p><img alt="" src={strDrinkThumb}></img></div>
            </div>
        )

    }
}


export default DrinksComponent