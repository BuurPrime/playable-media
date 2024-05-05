import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./PreGame.css";
import TypingAnimation from "../components/TypingAnimation";

function PreGame() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/game");
  };

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  const dialogue = [
    "Partner: “Good morning, sleepyhead. How are you feeling today?”",
    "You: “Hmm, I don’t know… Pretty groggy… What time is it?”",
    "Partner: “It’s 12:24 - you must have been exhausted last night to sleep this long”",
    "You: “Yeah, I guess so… I… I don’t really… I can’t remember anything from yesterday…”",
    "Partner: “Oh, honey, don’t worry too much. You probably just had a rough night's sleep”",
    "You: “I don’t know… What about Waffles? Did I feed him yesterday?”",
    "Partner: “Listen babe. I’m so sorry, but… Waffles… He passed away last night.”",
    "You: “What? No! How?!”",
    "Partner: “It’s okay sweetheart. I found him this morning. It seems he had an allergic reaction to the sunflower seeds you fed him.”",
    "You: “Wha- I would never dot that, I know he is allergic! Are you sure?”",
    "Partner: “Yes, I’m sure. It’s okay. Accidents happen, and sometimes, we don’t even realize it”",
    "You: “But… Oh no… *sobs*”",
    "Partner: “Honey... You’re being too dramatic - we can just get you a new hamster, and you won’t even be able to tell the difference.”",
    "You: “I don’t want a new hamster, I want Waffles...”",
    "Partner: “Look, I understand that you are upset, but let's be rational here... ”",
    "You: “... Are you sure that I... Were you home last night?”",
    "Partner: “No, I was at tennis practice. Wait - are you accusing me of killing Waffles?”",
    "You: “Nono I just.. I-”",
    "Partner: “After all I've done for you... you blame me for your mistakes?”",
    "You: “No I'm sorry, okay! It's nok like that... I'm just trying to figure out what happened and-”",
    "Partner: “You have always been a little crazy honey... Don't blame me, this si your own fault”",
    "You: “I know, I know...”",
    "Partner: “Let's just forget and move on. I'll be in the office if you need me”",
    "You: “Okay...”"
  ];
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="outer-container-pregame"
    >
      <div className="welcome-content">
        {dialogue.slice(0, currentSentenceIndex + 1).map((sentence, index) => (
          <TypingAnimation key={index} text={sentence} />
        ))}
        {currentSentenceIndex < dialogue.length - 1 && (
          <button
            className="button"
            onClick={() => setCurrentSentenceIndex(currentSentenceIndex + 1)}
          >
            CONTINUE
          </button>
        )}
        {currentSentenceIndex === dialogue.length - 1 && (
          <>
          <p className="what-happened"> What did happen last night? </p>
          <button className="button start" onClick={startGame}>
            TAKE A LOOK AROUND
          </button>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default PreGame;
