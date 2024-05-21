import { React, useState, useEffect } from "react";
import "./Game.css";
import { motion } from "framer-motion";
import HowToPlayPopUp from "../components/HowToPlay";
import TypingAnimation from "../components/TypingAnimation";
import AllCluesFound from "./allCluesFound";

function Game() {

  // --------- ROOMS ---------

  const rooms = {
    bedroom: {
      name: "bedroom",
      roomDescription: "This is your bedroom",
      lookAround:
        "The room is messy. In a vase by the window sits pretty flowers. They remind you how much your partner loves you. You realize, that you are wearing a single shoe, and that the other one is in the bed. You must have been really tired to not take them off before going to sleep.",
      exits: ["living room"],
      items: ["shoe"],
    },
    livingRoom: {
      name: "living room",
      roomDescription:
        "The living room is dimly lit. It does not bother you, since your heads hurts.",
      lookAround:
        "Bookshelves stand against the biggest walls, and a big couch is in the middle of the room, facing a tv. Waffles cage is right behind the couch on a long shallow table. You cannot see Waffles inside. Next to the cage is a bag of sunflower seeds that you purchased last year, before you knew of Waffles allergies. You thought, that you put those away in the closet...",
      exits: ["bedroom", "bathroom", "kitchen", "entry"],
      items: ["sunflower seeds"],
    },
    bathroom: {
      name: "bathroom",
      roomDescription: "The bathroom is small, but fits all it needs. The bathtub is up against the wall next to the sink, that has a mirror cabit above.",
      lookAround: "You open the cabinet on the wall, only to see a mess - it looks like someone was looking for something in here, but did not find it. Also - to your surprise, the hamper is empty. It is usually filled with sports clothes from tennis practice.",
      exits: ["living room"],
      items: [""],
    },
    kitchen: {
      name: "kitchen",
      roomDescription: "All over the table is a mess the from baking something... You partner does not bake.",
      lookAround:
        "Hung on the fridge, is an invitation to your friends birthday party. The date was yesterday. Was I out partying all night? Did I black out?",
      exits: ["living room", "closet"],
      items: ["invitation"],
    },
    closet: {
      name: "closet",
      roomDescription: "The closet it filled ot the brim with random things, you don't want to look at all day. This includes a broom, canned tomatos, cleaning supplies, and a big bag of hamster food.",
      lookAround: "On the floor is a sticky note with your handwriting on it saying: 'for Waffles'. ",
      exits: ["kitchen"],
      items: ["sticky note"],
    },
    office: {
      name: "office",
      roomDescription: "Your partner is sitting at their desk, busy with something. Your desk next to theirs is tidy, and there are pictures of you two together in heart shaped frames. You clearly love each other.",
      lookAround:
        "You look at your shared calendar hanging on the wall. You have a date night comming up, and dentist appointment next week. Interestingly, the only plans listed for yesterday were 'wimbledon finals'. Your partner would never miss that.",
      exits: ["entry"],
      items: ["calendar"],
    },
    entry: {
      name: "entry",
      roomDescription: "Your entry is small, but fits what it needs.",
      lookAround:
        "A small shallow table stands against the wall. On top it is a bowl with keys and the new pair of headphones that you partner gifted you - how nice of them.",
      exits: ["living room", "office"],
      items: [""],
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
  const [allCluesFound, setAllCluesFound] = useState(true);

  // --------- USE EFFECT --------- 

  useEffect(() => {
    if (inventory.length === 5) {
      setAllCluesFound(true);
    }
  }, [inventory]);

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
    var newItem = words.slice(1).join(" ");
  
    if (currentRoom.items.includes(newItem)) {
      setInventory((prevInventory) => [...prevInventory, newItem]);
      setDescription("You picked up " + newItem + ".");
      console.log(newItem);
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
      <label htmlFor="input"  className="label">
        {" "}
        » TYPE YOUR COMMAND HERE{" "}
      </label>
      <input
        id="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={handleKeyPress}
        autocomplete="off"
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
      {allCluesFound && <AllCluesFound/>}
    </motion.div>
  );
}

export default Game;
