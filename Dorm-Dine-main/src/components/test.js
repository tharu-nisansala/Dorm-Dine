import React from 'react';
import foodImage from './images/food_image.png';
import coupleImage from './images/couple_image.png';
import './test.css'
const MainContent = () => (
  <main className="main-content">
    <section className="content-section">
      <div className="text-content">
        <h1>Dive into Delights Of Delectable <span>Food</span></h1>
        <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
        <button className="order-button">Order Now</button>
      </div>
      <div className="image-content">
        <img src={foodImage} alt="Delicious Food" />
      </div>
    </section>
    <section className="content-section">
      <div className="image-content">
        <img src={coupleImage} alt="Couple with Suitcase" />
      </div>
      <div className="text-content">
        <h1>Dive into Delights Of Delectable <span>Food</span></h1>
        <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
        <button className="view-button">View Now</button>
      </div>
    </section>
  </main>
);

export default MainContent;
