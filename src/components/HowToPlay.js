import { React } from "react";

function HowToPlayPopUp({ onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2> How to play </h2>
        <p> This is a text adventue game. </p>
        <p> You can use following commands: </p>
        <ul>
          <li> Look around: Examine your surroundings. </li>
          <li> Go to [room]: Move to a different room. </li>
          <li> Take [item]: Pick up an item. </li>
          <li> Use [item]: Interact with an item. </li>
          <li> Inventory: Check your inventory. </li>
        </ul>
        <p> Have sound ON for the best experience. </p>
        <button className="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}


export default HowToPlayPopUp;