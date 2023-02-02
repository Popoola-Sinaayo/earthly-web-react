import { useEffect, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import Main from "./Main";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="app-container">
          <div className="app">
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              style={{ rotate: 0 }}
              transition={{
                default: {
                  duration: 1.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  repeat: Infinity,
                },
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            />
          </div>
          <h3 style={{ marginTop: "40px" }}>Welcome !</h3>
        </div>
      ) : (
        <Main />
      )}
    </div>
  );
}

export default App;
