import React, { useState } from 'react';
import TitleTestClass from './titletest'
import './home.scss';

function Home() {

    const [text, setText] = useState("Cliccami")

    function handleClick() {
        setText("AHIOOO, Mi hai cliccato")
    }

    return(
        <div>
            <TitleTestClass text={text} handleClick={handleClick} />
            <div className="home__search__container">
                <form>
                <input type="search"></input>
                <button>Let's drink!</button>
                </form>
            </div>
        </div>
    )
}

export default Home