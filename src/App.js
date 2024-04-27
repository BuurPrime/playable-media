import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Game />} className="App"/>
        <Route path="/welcome" element={<Welcome />} className="App"/>
        <Route path="/game" element={<Game />} className="App"/>
      </Routes>
    </Router>
  );
}

export default App;
