import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
        </>
      )}
    </div>
  );
}

export default App;
