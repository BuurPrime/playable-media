import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./Welcome.css";

// -------------------------------- POP UP ----------------------------------

function HowToPlayPopUp({ onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2> How to play </h2>
        <p> This is a text adventue game. </p>
        <p> You can use commands including: </p>
        <ul>
          <li> Look around: Examine your surroundings. </li>
          <li> Go [room]: Move to a different room. </li>
          <li> Take [item]: Pick up an item. </li>
          <li> Use [item]: Interact with an item. </li>
          <li> Inventory: Check your inventory. </li>
          <li> Help: Get assistance with commands. </li>
        </ul>
        <button className="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

function Welcome() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/PreGame");
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="outer-container"
    >
      <div className="welcome-content">
        <h1> IN THE VASE SITS PRETTY FLOWERS </h1>
        <button className="button start" onClick={startGame}>
          START GAME
        </button>
        <button onClick={togglePopup} className="button how-to-play">
          {" "}
          How to play{" "}
        </button>
        {isPopupOpen && <HowToPlayPopUp onClose={closePopup} />}
      </div>
    </motion.div>
  );
}

export default Welcome;
