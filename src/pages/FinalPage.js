import { React } from "react";
import "./FinalPage.css";
import { motion } from "framer-motion";

function FinalPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="final-container">
        <p> The journey might be long.</p>
        <p> And it wont be easy.</p>
        <p> But it is worth it in the end.</p>
        <p> Because you deserve better. </p>

        <img
          src="bucket.png"
          className="image"
          alt="pretty flowers in a vase"
        ></img>
        <a
          href="https://www.thehotline.org/resources/a-deeper-look-into-gaslighting/"
          className="link"
          alt="Read more"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          A first step{" "}
        </a>
      </div>
    </motion.div>
  );
}

export default FinalPage;
