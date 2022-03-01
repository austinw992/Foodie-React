import React, { useState, useEffect } from "react";

import TinderCards from "react-tinder-card";

import "./Food_Card.css";
import database from "./firebase";

function Food_Cards() {
  const [food, setFood] = useState([
  
  ]);
  //not professional method
  //const food = [];
  //food.push('')

  //pushes to an array in react
  //setFood([]...food, '', ''])

  //runs based on a condition within React
  useEffect(() => {
    const unsubscribe = database
      .collection("food")
      .onSnapshot((snapshot) =>
        setFood(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
        //cleans up the database once they are done
      unsubscribe();
    };
    //run once when the component loads
    //if you add a dependency then itll changes everytime it loads
  }, [food]);

  return (
    <div>
      <div className="foodCards__cardContainer">
        {food.map((food) => (
          <TinderCards
            className="swipe"
            key={food.cuisine}
            //always give keys in react, it allows react to efficiently re-render a list
            //makes the app super fast
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `img(${food.img})` }}
              className="card"
            >
              <h3>{food.cuisine}</h3>
            </div>
          </TinderCards>
        ))}
      </div>
    </div>
  );
}

export default Food_Cards;
