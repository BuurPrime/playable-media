import { React } from "react";
import "./allCluesFound.css";

function allCluesFound() {
    return(
    <div className="all-clues-container">
        <p className="all-clues-text"> By the things you have seen, something seems off, but you are not really sure about it. You have two options: </p>
        <div className="button-container">
            <button className="button clues"> CONFRONT PARTNER </button>
            <button className="button clues"> GO BACK TO BED </button>
        </div>
    </div>
    )
}

export default allCluesFound;