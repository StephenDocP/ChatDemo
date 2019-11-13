import React from "react";

import logo from "./logo.svg";
import "./App.css";

import { firestoreQueryHook } from "./lib/firestoreHook";
import { MessageForm } from "./components/MessageForm";

function App() {
  const { data: messages, loading } = firestoreQueryHook("messages");

  return (
    <div className="App">
      <div className="messages">
        {messages &&
          messages.map(message => (
            <div>
              <p>{message.content}</p>
              <span>{message.username}</span>
            </div>
          ))}
      </div>
      <MessageForm />
    </div>
  );
}

export default App;
