import { React } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TypingAnimation from "../components/TypingAnimation";


function PostGameConfront() {
  
    const navigate = useNavigate();

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  const dialogueConfront = [
    "Partner: “Good morning, sleepyhead. How are you feeling today?”",
    "You: “Hmm, I don’t know… Pretty groggy… What time is it?”",
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
