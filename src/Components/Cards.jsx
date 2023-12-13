import React from "react";
import CardItems from "./CardItems";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Epic Destinations!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItems
              src="Images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItems
              src="Images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards-items">
            <CardItems
              src="Images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItems
              src="Images/img-4.jpg"
              text="Experience Football on Top of the Himalayan Mountains"
              label="Adventure Sport"
              path="/services"
            />
            <CardItems
              src="Images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided Camel tour"
              label="Adrenaline"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
