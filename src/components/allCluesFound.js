import { React } from "react";
import { useNavigate } from "react-router-dom";
import "./allCluesFound.css";

function allCluesFound() {
  const navigate = useNavigate();

  const handleConfrontPartner = () => {
    navigate("/playable-media/postgame-confront");
  };

  const handleGoBackToBed = () => {
    navigate("/playable-media/postgame-bed");
  };

  return (
    <div className="all-clues-container">
      <p className="all-clues-text">
        {" "}
        You feel off. You can't really name your emotions. You should probably
        just go back to bed.{" "}
      </p>
      <div className="button-container">
        <button className="button clues" onClick={handleConfrontPartner}> CONFRONT PARTNER </button>
        <button className="button clues" onClick={handleGoBackToBed}> GO BACK TO BED </button>
      </div>
    </div>
  );
}

export default allCluesFound;
