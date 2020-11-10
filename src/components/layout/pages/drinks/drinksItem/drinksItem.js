import React from 'react'

function drinksItem(props){
    return(
        <div>
            <a href="#">
            <h3>{props.name}</h3>
            <img src={props.img} alt="" />
            <p>{props.description}</p>
            </a>
        </div>
    )
}

export default drinksItem