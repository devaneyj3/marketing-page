import React from 'react';
import './home.scss'
import cereal from '../../img/cereal.jpg'
import Products from './Products/products'

const Home = () => {
    return (
        <div className="container">
            <div className="home">
                <section className="info">
                    <h1>Welcome to Mike's Cereal Shack</h1>
                    <p>We have just the same amount of varieties that we have in stores.</p>
                    <img src={cereal} height="200" width="200" alt="Cereal"/>
                </section>
            </div>
            <br/>
                <h1>Here are some favorites</h1>
            <section className= "products">
                <Products/>
            </section>
        </div>
    )
}

export default Home;
