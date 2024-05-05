import { React, useState } from "react";
import "./Game.css";
import { motion } from "framer-motion";
import HowToPlayPopUp from "../components/HowToPlay";
import TypingAnimation from "../components/TypingAnimation";

function Game() {
  const rooms = {
    bedroom: {
      name: "bedroom",
      roomDescription: "This is your bedroom",
      lookAround:
        "The room is messy, and things are scattered over the floow. Your green party-pants are by your side of the bed.",
      exits: ["living room"],
      items: ["party-pants"],
    },
    livingRoom: {
      name: "living room",
      roomDescription:
        "The living room is dimly lit. It does not bother you, since your heads hurts.",
      lookAround:
        "Bookshelves stand against the biggest walls, and the couch takes centerpeice in the room. Waffles cage is right behind the couch on a long shallow table. You cannot see Waffles inside.",
      exits: ["bedroom", "bathroom", "kitchen", "entry"],
      items: ["sunflower seeds"],
    },
    bathroom: {
      name: "bathroom",
      roomDescription: "The bathroom is small, but fits all it needs. The bathtub is up against the wall next to the sink, with a mirror cabit above.",
      lookAround: "You open the cabinet on the wall, only to see a mess - it looks like someone was looking for something in here, but did not find it. Also - to your surprise, the hamper is empty. It is usually filled with sports clothes from tennis practice.",
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
      roomDescription: "This is your entry",
      lookAround:
        "A small shallow table stands against the wall - theres a bowl with keys, a cap, old newspapers that you did not bother thowing out.",
      exits: ["living room", "office"],
      items: ["pen"],
    },
  };

  // --------- STATE ---------

  const [currentRoom, setCurrentRoom] = useState(rooms["bedroom"]);
  const [command, setCommand] = useState("> ");
  const [description, setDescription] = useState(
    "You get up from your bed, standing in your bedroom. You feel... off."
  );
  const [input, setInput] = useState("");
  const [inventory, setInventory] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // --------- HANDLE INPUT COMMANDS ---------

  const handleInput = () => {
    setCommand("> " + input);
    console.log("Input:", input);
    setInput("");

    if (input.toLowerCase().trim().startsWith("go")) {
      handleGoCommand();
    } else if (input.toLowerCase().endsWith("around")) {
      handleLookAroundCommand();
    } else if (
      input.toLowerCase().startsWith("take") ||
      input.toLowerCase().startsWith("pick")
    ) {
      handleTakeCommand();
    } else if (input.toLowerCase().startsWith("use")) {
      handleUseCommand();
    } else if (input.toLowerCase().startsWith("inventory")) {
      handleInventoryCommand();
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


  const handleLookAroundCommand = () => {
    setDescription(currentRoom.lookAround);
  };

  const handleTakeCommand = () => {
    var words = input.split(" ");
    var newItem = words[words.length - 1];

    if (currentRoom.items.includes(newItem)) {
      setInventory((prevInventory) => [...prevInventory, newItem]);
      setDescription("You picked up " + newItem.toString() + ".");
      console.log(newItem)
    } else {
      setDescription("There is no such item in this room");
    }
  };

  const handleUseCommand = () => {
    console.log("use");
  };

  const handleInventoryCommand = () => {
    setDescription("Inventory: " + inventory.join(", "));
  };

  const handleInvalidInput = () => {
    console.log("not a valid command.");
    setErrorMessage(
      "Not a valid command. Please check your spelling, or click 'How to play' to read more."
    );
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleInput();
    }
  };

  // --------- HANDLE POP UP STUFF ---------

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // --------- ACTUAL RETURNED HTML ---------

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 5, delay: 0.2 }}
      className="container"
    >
      <div className="top-bar">
        <p> IN THE VASE SITS PRETTY FLOWERS </p>
      </div>
      <label htmlFor="output" className="label">
        {" "}
        » OUTPUT{" "}
      </label>
      <div className="output" id="output">
        <p className="command"> {command} </p>
        <div className="description">
          <TypingAnimation text={description} />
        </div>
        <p className="exits-text">
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
      <div className="help-container">
        <p className="help" onClick={togglePopup}>
          {" "}
          How to play{" "}
        </p>
        {isPopupOpen && <HowToPlayPopUp onClose={closePopup} />}
      </div>
    </motion.div>
  );
}

export default Game;
