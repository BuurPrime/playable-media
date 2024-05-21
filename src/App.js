import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Game from "./components/Game";
import Welcome from "./pages/welcome";
import PreGame from "./pages/PreGame";
import PostGameBed from "./pages/PostGameBed";
import PostGameConfront from "./pages/PostGameConfront";
import FinalPage from "./pages/FinalPage";
import FinalPage2 from "./pages/FinalPage2";

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap the Route components with motion.div */}
        <Route
          path="/playable-media/"
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
          path="/playable-media/welcome"
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
          path="/playable-media/game"
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
        <Route
          path="/playable-media/pregame"
          element={(
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="App"
            >
              <PreGame />
            </motion.div>
          )}
        />
        <Route
          path="/playable-media/postgame-bed"
          element={(
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="App"
            >
              <PostGameBed />
            </motion.div>
          )}
        />
        <Route
          path="/playable-media/end"
          element={(
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="App"
            >
              <FinalPage />
            </motion.div>
          )}
        />
        <Route
          path="/playable-media/end2"
          element={(
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="App"
            >
              <FinalPage2 />
            </motion.div>
          )}
        />
        <Route
          path="/playable-media/postgame-confront"
          element={(
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="App"
            >
              <PostGameConfront />
            </motion.div>
          )}
        />
      </Routes>
    </Router>
  );
}

export default App;
