import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Chat_Screen.css";

const Chat_Screen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([

    {
      name: "",
      image: "",
      message: ""
    }
    


  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        /* put in a message */
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__owntext">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__form">
        <input
          className="chatScreen__input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__button"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default Chat_Screen;
