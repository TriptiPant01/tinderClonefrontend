import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import Axios from "../axios";

export default function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await Axios.get("tinder/card");
      setPeople(req.data);
    }
    fetchData();
  }, []);

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__container">
        {people.map((p) => (
          <TinderCard
            className="swipe"
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
            preventSwipe={["right", "left"]}
          >
            <div style={{ backgroundImage: `url(${p.url})` }} className="card">
              <h3>{p.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
