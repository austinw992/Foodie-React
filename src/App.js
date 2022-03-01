import React from 'react';

import Header from './Header';
import './App.css';

import Food_Card from "./Food_Cards";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Swipe_Buttons from "./Swipe_Button";
import Chats from "./Chats";
import Chat_Screen from "./Chat_Screen";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>

          <Route path="/chat/:food">
            <Header backButton="/chat"/>
            <Chat_Screen/>
          </Route>

          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>

          <Route path="/">
            <Header />
            <Food_Card />
            <Swipe_Buttons />
          </Route>


        </Switch>
      </Router>


    </div>
  );
}

export default App;
