// pages/Home.js
import React from 'react';
import './home.css';
import foodImage from '../images/young-pretty-woman-eating-pizza-bar-removebg-preview 1.png';  // Adjusted path based on your structure
import coupleImage from '../images/full-shot-woman-talking-host-removebg-preview 1.png';

function Home() {
  return (
    <div>
      <main className="main-content">
        <section className="content-section">
          <div className="text-content">
          <h1>
            Dive into Delights <br />
            Of Delectable <span >Food</span>
          </h1>
          
          <button className="order-button">Order Now</button>
          <p>
            Where Each Plate Weaves a Story of Culinary <br/>Mastery and Passionate
            Craftsmanship
          </p>
        </div>
        <div className="hero-image">
        <div className="circle"></div> {/* Circle background */}
          <img
            src={foodImage}
            alt="A woman enjoying pizza"
          />

          </div>
        </section>
        <section className="content-section">
        
      <div className="image-content">
      <div className="circle1"></div> {/* Circle background */}
        <img src= {coupleImage}alt="Couple with Suitcase" /> {/* Replace with your image path */}
      </div>
      <div className="text-content">
        <h1>Look For <br/>real <span>Boarding</span></h1>
        <button className="view-button">View Now</button>
        <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
       
      </div>
  

        </section>
      </main>
    </div>
  );
}

export default Home;
