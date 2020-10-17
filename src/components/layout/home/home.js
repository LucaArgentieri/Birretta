import React from 'react';
import './home.scss';

function Home() {
    return(
        <div>
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