import { React, useState, useEffect } from "react";
import Room from "./Room";
import "./Game.css";

function Game() {
  const [currentRoom, setCurrentRoom] = useState(0);
  const [command, setCommand] = useState("");
  const [description, setDescription] = useState("This is the game.");
  const [input, setInput] = useState("");
  const [inventory, setInventory] = useState([]);

  const rooms = [
    [
      { id: "00", name: "Bedroom", description: "Description for Room 00" },
      { id: "01", name: "Living Room", description: "Description for Room 01" },
      { id: "02", name: "Kitchen", description: "Description for Room 02" },
    ],
    [
      { id: "10", name: "Room 10", description: "Description for Room 10" },
      { id: "11", name: "Room 11", description: "Description for Room 11" },
      { id: "12", name: "Room 12", description: "Description for Room 12" },
    ],
    [
      { id: "20", name: "Room 20", description: "Description for Room 20" },
      { id: "21", name: "Room 21", description: "Description for Room 21" },
      { id: "22", name: "Room 22", description: "Description for Room 22" },
    ],
  ];

  useEffect(() => {}, [currentRoom]);

  const handleInput = () => {
    setCommand("> " + input);
    console.log("Input:", input); //DOES SOMETHING ELSE
    setInput("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleInput();
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <p> WELCOME: IN THE VASE SITS PRETTY FLOWERS </p>
      </div>
      <label htmlFor="output" className="label">
        {" "}
        » OUTPUT{" "}
      </label>
      <div className="output" id="output">
        <p className="command"> {command} </p>
        <p className="description"> <Room description={description}/> </p>
      </div>
      <label htmlFor="input" className="label">
        {" "}
        » TYPE YOUR COMMAND HERE{" "}
      </label>
      <input
        id="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={handleKeyPress}
        placeholder="Enter command..."
      />
    </div>
  );
}

export default Game;
