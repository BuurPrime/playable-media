import { React, useState, useEffect } from "react";
import "./Game.css";

function Game() {
  const rooms = {
    bedroom: {
      name: "bedroom",
      roomDescription: "This is your bedroom",
      lookAround: "THe cage of Waffles is quiet",
      exits: ["living room"],
      items: ["Waffles body"],
    },
    livingRoom: {
      name: "living room",
      roomDescription: "This is your living room",
      lookAround: "sunflowers in the vase",
      exits: ["bedroom", "bathroom", "kitchen", "office", "entry"],
      items: ["sunflower seeds"],
    },
    bathroom: {
      name: "bathroom",
      roomDescription: "This is your bathroom",
      lookAround: "The towel is wet from yesterday",
      exits: ["living room"],
      items: ["shampoo"],
    },
  };

  const [currentRoom, setCurrentRoom] = useState(rooms["bedroom"]);
  const [command, setCommand] = useState("> ");
  const [description, setDescription] = useState(
    "On a sunday morning you wake up in your room. Something seems... off. But you can't quite put your finger on it."
  );
  const [input, setInput] = useState("");
  const [inventory, setInventory] = useState([]);

  //useEffect(() => {}, [currentRoom]);

  const handleInput = () => {
    //Setting the input on screen and whiping the input field
    setCommand("> " + input);
    console.log("Input:", input);
    setInput("");

    // Checking for commands
    if (input.toLowerCase().trim().startsWith("go")) {
      handleGoCommand();

    } else if (input.toLowerCase().startsWith("use")) {
      handleUseCommand();

    } else {
      handleInvalidInput();
    }
  };

  const handleGoCommand = () =>{
    console.log("Go command given: " + {input});
    if (input.toLowerCase().trim().endsWith("living room") && rooms.bathroom.exits.includes("living room")){
      setCurrentRoom(rooms["livingRoom"]);
    }
    else if (input.toLowerCase().trim().endsWith("bathroom")){
      setCurrentRoom(rooms["bathroom"]);
    }
  }

  const handleUseCommand  = () =>{
    console.log("use");
  }

  const handleInvalidInput  = () =>{
    console.log("not a valid command.");
  }

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
        <p className="description">
          {description} <br />
          <br />
          Exits:{" "}
          {currentRoom.exits.map((exit, index) => (
            <span key={index}>
              {index > 0 && ", "}
              {exit}
            </span>
          ))}
        </p>
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
