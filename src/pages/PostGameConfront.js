import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TypingAnimation from "../components/TypingAnimation";

function PostGameConfront() {
  const navigate = useNavigate();

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  const dialogueConfront = [
    "You: “Hey babe uhm... Can we talk?”",
    "Partner: “About what?”",
    "You: “ It's just that... It seems that I was at a birthday party yesterday... ”",
    "Partner: “Yes, you were. So?”",
    "You: “Then... You know... I could not have been home to... feed Waffles”",
    "Partner: “Are you serious right now?”",
    "You: “Sorry, it's just that... Things don't add up. You said you were at tennis practice, but there is no sport clothes in the hamper...”",
    "Partner: “Is it so hard for you to beleive that I can wash my own clothes? You are seriously just taking things out of context, and blowing them up. You are crazy.”",
    "You: “But... What about watching Wimbledon? You always watc-”",
    "Partner: “We watched it together after practice in the lounge.”",
    "You: “Oh... But then what about the medicine cabitnet - it is all messy, what did you look for? Waffles medicine it not in there”",
    "Partner: “I looked for painkillers, as I hurt my knee at practice. I can not handle how rude you are right now. You are lucky, that I love you, because I don't think many others would.”",
    "You: “I'm sorry, I just don't understand what happened...”",
    "Partner: “You fed Waffles in a hurry when you came home from the birthday, and forgot that he was allergic - that is what happened, it is your fault.”",
    
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="outer-container-pregame"
    >
      {dialogueConfront
        .slice(0, currentSentenceIndex + 1)
        .map((sentence, index) => (
          <TypingAnimation key={index} text={sentence} />
        ))}
      {currentSentenceIndex < dialogueConfront.length - 1 && (
        <button
          className="button"
          onClick={() => setCurrentSentenceIndex(currentSentenceIndex + 1)}
        >
          CONTINUE
        </button>
      )}
    </motion.div>
  );
}

export default PostGameConfront;
