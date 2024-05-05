import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HowToPlayPopUp from "../components/HowToPlay";
import "./Welcome.css";

// -------------------------------- POP UP ----------------------------------


function Welcome() {
  const navigate = useNavigate();

  let audio = new Audio("/bgMusic.mp3");

  const startMusic = () => {
    audio.volume = 0.1;
    audio.play()
  }

  const startGame = () => {
    startMusic();
    navigate("/playable-media/pregame");
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
