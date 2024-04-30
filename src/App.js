import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Game from "./components/Game";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap the Route components with motion.div */}
        <Route
          path="/"
          element={(
            <motion.div
              initial={{ opacity: 0, y: -50 }} // Initial animation properties
              animate={{ opacity: 1, y: 0 }} // Animation properties to transition to
              exit={{ opacity: 0, y: -50 }} // Animation properties when exiting
              transition={{ duration: 0.5 }} // Transition duration
              className="App"
            >
              <Welcome />
            </motion.div>
          )}
        />
        <Route
          path="/welcome"
          element={(
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="App"
            >
              <Welcome />
            </motion.div>
          )}
        />
        <Route
          path="/game"
          element={(
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="App"
            >
              <Game />
            </motion.div>
          )}
        />
      </Routes>
    </Router>
  );
}

export default App;
