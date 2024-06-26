import React, { useState, useEffect, forwardRef } from "react";
import "./TypingAnimation.css";

const TypingAnimation = forwardRef(({ text }, ref) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
    setDisplayText("");
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const typingEffect = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 50);

      return () => clearTimeout(typingEffect);
    }
  }, [currentIndex, text]);

  return <div className="dialogue-line" ref={ref}>{displayText}</div>;
});

export default TypingAnimation;
