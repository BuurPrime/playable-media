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
    "You: “Hey babe uhm... can we talk?”",
    "Partner: “About what?”",
    "You: “ It's just that... It seems that I was at a birthday party yesterday... ”",
    "Partner: “Yes, you were. So?”",
    "You: “Then... You know... I could not have been home to... feed Waffles”",
    "Partner: “Are you serious right now?”",
    "You: “Sorry, it's just that... Things don't add up. You said you were at tennis practice, but there is no sports clothes in the hamper...”",
    "Partner: “Is it so hard for you to beleive that I can wash my own clothes? You are seriously just taking things out of context, and blowing them up. You are crazy.”",
    "You: “But... The calendar said that you should watch Wimbledon? You always watc-”",
    "Partner: “We watched it together after practice in the lounge.”",
    "You: “Oh... But then what about the medicine cabitnet - it is all messy, what did you look for? Waffles medicine it not in there...”",
    "Partner: “I looked for painkillers, as I hurt my knee at practice. Hoenstly, I can not handle how rude you are right now! You are lucky, that I love you, because I don't think many others would.”",
    "You: “I'm sorry, I just don't understand what happened...”",
    "Partner: “You fed Waffles in a hurry when you came home from the birthday, and forgot that he was allergic - that is what happened, it is your fault.”",
    "You: “It's just - I did not even have time to take my shoes or clothes off before going to bed...”",
    "Partner: “It's because you were drunk and irresponsible. And even more so, when you are accusing me of doing something, I did not do. Why would I lie to you?”",
    "You: “I don't know...”",
    "Partner: “I'm sorry if you're mad, but you need to stop making things up, and get a hold of yourself.”",
    "You: “I guess... I guess you're right. I'm sorry, its just that I'm confused and... sad. I'll try to do better...”",
    "Partner: “We all get stressed sometimes. Just trust me, okay? I only want what's best for us. Let's forget about it and move on.”",
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
            <button className="button end" onClick={goToFinal}>
              MOVE ON
            </button>
            <button className="button end" onClick={goToFinal}>
              "NO"
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default PreGame;
