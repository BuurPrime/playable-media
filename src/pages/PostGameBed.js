import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./PostGameConfront.css";
import TypingAnimation from "../components/TypingAnimation";

function PreGame() {
  const navigate = useNavigate();

  const goToFinal = () => {
    navigate("/playable-media/end");
  };

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const lastSentenceRef = useRef(null);

  const dialogueConfront = [
    "You walk back to the bedroom, and crawls under the blanket.",
    "...",
    "You're partner is right.",
    "You have been irrisponsible and rude.",
    "Making things up and blaming you partner, just because you were upset.",
    "That is wrong.",
    "...",
    "Luckily, they still love you.",
    "You should be thankful. Right?"
   
  ];

  useEffect(() => {
    if (lastSentenceRef.current) {
      lastSentenceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentSentenceIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="outer-container-pregame"
    >
      <div className="welcome-content">
        <div className="dialogue-container">
          {dialogueConfront
            .slice(0, currentSentenceIndex + 1)
            .map((sentence, index) => (
              <TypingAnimation
                key={index}
                text={sentence}
                ref={index === currentSentenceIndex ? lastSentenceRef : null}
              />
            ))}
        </div>
        {currentSentenceIndex < dialogueConfront.length - 1 && (
          <button
            className="button"
            onClick={() => setCurrentSentenceIndex(currentSentenceIndex + 1)}
          >
            CONTINUE
          </button>
        )}
        {currentSentenceIndex === dialogueConfront.length - 1 && (
          <div className="postgane-button-container">
            <button className="button" onClick={goToFinal}>
              YES
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default PreGame;
