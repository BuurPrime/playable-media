import { React, useState, useEffect } from "react";
import "./Game.css";
import { motion } from "framer-motion";

function Game() {
  const rooms = {
    bedroom: {
      name: "bedroom",
      roomDescription: "This is your bedroom",
      lookAround: "The cage of Waffles is quiet",
      exits: ["living room"],
      items: ["Waffles body"],
    },
    livingRoom: {
      name: "living room",
      roomDescription: "This is your living room",
      lookAround: "sunflowers in the vase",
      exits: ["bedroom", "bathroom", "kitchen", "entry"],
      items: ["sunflower seeds"],
    },
    bathroom: {
      name: "bathroom",
      roomDescription: "This is your bathroom",
      lookAround: "The towel is wet from yesterday",
      exits: ["living room"],
      items: ["shampoo"],
    },
    kitchen: {
      name: "kitchen",
      roomDescription: "This is your kitchen",
      lookAround:
        "All over the table is a mess the from making a cake... You do not recall it being there",
      exits: ["living room", "closet"],
      items: ["shampoo"],
    },
    closet: {
      name: "closet",
      roomDescription: "A broom closet.",
      lookAround: "Yup there is a broom in here.",
      exits: ["kitchen"],
      items: ["pen"],
    },
    office: {
      name: "office",
      roomDescription: "This is your office!",
      lookAround:
        "You work form home alot, which is also why you don't recall leaving",
      exits: ["entry"],
      items: ["pen"],
    },
    entry: {
      name: "entry",
      roomDescription: "This is your office!",
      lookAround:
        "You work form home alot, which is also why you don't recall leaving",
      exits: ["living room", "office"],
      items: ["pen"],
    },
  };

  const [currentRoom, setCurrentRoom] = useState(rooms["bedroom"]);
  const [command, setCommand] = useState("> ");
  const [description, setDescription] = useState(
    "On a sunday morning you wake up in your room. Something seems... off. But you can't quite put your finger on it."
  );
  const [input, setInput] = useState("");
  const [inventory, setInventory] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  //useEffect(() => {}, [currentRoom]);

  const handleInput = () => {
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

  const handleGoCommand = () => {
    console.log("Go command given: " + { input });
    if (
      input.toLowerCase().trim().endsWith("living room") &&
      currentRoom.exits.includes("living room")
    ) {
      setCurrentRoom(rooms["livingRoom"]);
      setDescription(rooms["livingRoom"].roomDescription);
      setErrorMessage("");
    } else if (input.toLowerCase().includes(currentRoom.name.toLowerCase())) {
      setErrorMessage("You are already here!");
    } else if (
      input.toLowerCase().trim().endsWith("bathroom") &&
      currentRoom.exits.includes("bathroom")
    ) {
      setCurrentRoom(rooms["bathroom"]);
      setDescription(rooms["bathroom"].roomDescription);
      setErrorMessage("");
    } else if (
      input.toLowerCase().trim().endsWith("kitchen") &&
      currentRoom.exits.includes("kitchen")
    ) {
      setCurrentRoom(rooms["kitchen"]);
      setDescription(rooms["kitchen"].roomDescription);
      setErrorMessage("");
    } else if (
      input.toLowerCase().trim().endsWith("closet") &&
      currentRoom.exits.includes("closet")
    ) {
      setCurrentRoom(rooms["closet"]);
      setDescription(rooms["closet"].roomDescription);
      setErrorMessage("");
    } else if (
      input.toLowerCase().trim().endsWith("office") &&
      currentRoom.exits.includes("office")
    ) {
      setCurrentRoom(rooms["office"]);
      setDescription(rooms["office"].roomDescription);
      setErrorMessage("");
    } else if (
      input.toLowerCase().trim().endsWith("entry") &&
      currentRoom.exits.includes("entry")
    ) {
      setCurrentRoom(rooms["entry"]);
      setDescription(rooms["entry"].roomDescription);
      setErrorMessage("");
    } else if (
      input.toLowerCase().trim().endsWith("bedroom") &&
      currentRoom.exits.includes("bedroom")
    ) {
      setCurrentRoom(rooms["bedroom"]);
      setDescription(rooms["bedroom"].roomDescription);
      setErrorMessage("");
    } else {
      handleInvalidInput();
    }
  };

  const handleUseCommand = () => {
    console.log("use");
  };

  const handleInvalidInput = () => {
    console.log("not a valid command.");
    setErrorMessage(
      "Not a valid command. Please check your spelling, or click 'help' in the top left corner."
    );
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleInput();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 5, delay: 0.2 }}
      className="container"
    >
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
      <p className="error-message"> {errorMessage} </p>
    </motion.div>
  );
}

export default Game;
