import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/game");
  };

  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0}}
    transition={{ duration: 1, delay: 0.2 }}
    className="outer-container"
    >
      <div className="welcome-content">
        <h1> IN THE VASE SITS PRETTY FLOWERS </h1>
        <button className="button start" onClick={startGame}>
          START GAME
        </button>
        <button className="button how-to-play"> How to play </button>
      </div>
    </motion.div>
  );
}

export default Welcome;
