import React from "react";
import "../css/Home.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 1 }}
    >
      <div className="home">
        <div className="home2">
          <h4>
            <span> Welcome </span>to your profile Website
          </h4>
          <h3>Log in and enter your personal information</h3>
          <h5>You can see profiles of people like you</h5>
          <div class="wrap">
            <a href="info">
              <button class="button">Ensert now</button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
