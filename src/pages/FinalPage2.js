import { React } from "react";
import { motion } from "framer-motion";
import "./FinalPage.css";

function FinalPage2() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="final-container">
        <p> You have taken the first step.</p>
        <p> You are strong.</p>
        <p> It will get better. </p>
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
        >
          {" "}
          A next step{" "}
        </a>
      </div>
    </motion.div>
  );
}

export default FinalPage2;
