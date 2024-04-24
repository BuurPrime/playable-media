import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <Game/>
    </div>
  );
}

export default App;
