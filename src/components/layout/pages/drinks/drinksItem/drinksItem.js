import React, { useMemo } from 'react'
import './drinksItem.scss'


const DrinksItem = React.memo(({ id, name, image_url }) => {
    return (
        <div>
            <div className="card__container">
                <h3>{name}</h3>
                <img src={image_url} alt="" />
            </div>
        </div>
    )
})

export default DrinksItem