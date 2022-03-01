import React, { useState, useEffect } from "react";

import Food_Card from "react-food-card";

import "./Food_Card.css";
import database from "./firebase";

function Food_Card() {
  const [food, setFood] = useState([

    {
        cuisine: 'CHINESE' ,
        img:'https://www.thespruceeats.com/thmb/n9UEl-Twp5oLawlMXzhnpiV4TYw=/2733x3644/filters:fill(auto,1)/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg',
    },
    {
        cuisine: 'JAPANESE' ,
        img: 'http://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/026/550/medium/50-japanese-food-to-try_%281%29.jpg?2020',
    },
    {
        cuisine: 'KOREAN' ,
        img: 'http://cdn.shopify.com/s/files/1/2246/7407/articles/kfoodtable-e1552928746975_1200x630.png?v=1560793954',
    },
    {
        cuisine: 'INDIAN' ,
        img: 'https://cdn.vox-cdn.com/thumbor/aNM9cSJCkTc4-RK1avHURrKBOjU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20059022/shutterstock_1435374326.jpg',
    },
    {
        cuisine: 'AMERICAN' ,
        img: 'https://www.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg',
    },
    {
        cuisine: 'ITALIAN' ,
        img: 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/02/italian-food.jpg?quality=82&strip=1&resize=640%2C360',
    },
    {
        cuisine: 'MEXICAN' ,
        img: 'https://www.findhomeaway.com/files/blog/202109201832446148d3cc4df40.jpg',
    },
    {
        cuisine: 'FRENCH' ,
        img: 'https://www.getflavor.com/wp-content/uploads/2019/01/4-Taureaux-Spread.jpg',
    },
    {
        cuisine: 'THAI' ,
        img: 'https://asianinspirations.com.au/wp-content/uploads/2020/02/01_SouthtoNorth_1920x1280.jpg',
    },
    {
        cuisine: 'VIETNAMESE' ,
        img: 'https://scontent.ccdn.cloud/image/vivitravels-en/907e08d5-0ea4-4fbc-9881-1ebbcf026c4d/maxw-960.jpg',
    },
    {
        cuisine: 'GERMAN' ,
        img: 'https://www.chefspencil.com/wp-content/uploads/All-Aspects-of-German-Cuisine.jpg',
    },
    {
        cuisine: 'MEDITERRANEAN' ,
        img: 'https://media.timeout.com/images/103161880/image.jpg',
    }
  
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
          <Food_Card
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
          </Food_Card>
        ))}
      </div>
    </div>
  );
}

export default Food_Card;
