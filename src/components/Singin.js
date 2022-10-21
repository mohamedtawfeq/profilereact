import React from "react";
import imgprtson from "./imgs/person.png";
import { motion } from "framer-motion";

import "../css/Singin.css";

function Singin() {
  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 350 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
    >
      <div className="Home">
        <form className="content">
          <div className="img1">
            <img src={imgprtson} alt="" />
          </div>
          <h2>sing-in</h2>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Email</span>
            <i></i>
          </div>

          <div className="inputBox">
            <input type="Password" required="required" />
            <span>Password</span>
            <i></i>
          </div>
          <div className="btnSin">
            <button> Singin</button>
            <span>Forgin Password</span>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default Singin;
