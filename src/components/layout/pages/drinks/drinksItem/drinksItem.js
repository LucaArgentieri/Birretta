import React from 'react'
import './drinksItem.scss'

function drinksItem(props){

    return(
        <div>
            <a className="card__container" href="#">
            <h3>{props.name}</h3>
            <img src={props.img} alt="" />
            </a>
        </div>
    )
}

export default drinksItem