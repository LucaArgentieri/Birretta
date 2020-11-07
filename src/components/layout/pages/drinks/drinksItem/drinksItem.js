import React from 'react'

function drinksItem(props){
    return(
        <div>
            <a href="#">
            <h3>{props.name}</h3>
            <img src={props.img} alt=""/>
            </a>
        </div>
    )
}

export default drinksItem