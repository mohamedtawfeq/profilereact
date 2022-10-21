import React from "react";
import { motion } from "framer-motion";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import "../css/Insertinfo.css";

function Insertinfo() {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 0.1 }}
    >
      <form className="continfo">
        <h2>insert your information</h2>

        <div className="tow">
          <div className="imges">
            <h5>insrt your photo</h5>
            <input
              className="inputphoto"
              type="file"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="name">
            <h5>Enter your name</h5>
            <input type="text" placeholder="Enter your name" required />

            <div className="mmmm">
              <div className="mmmm2">
                <h5>Enter your old</h5>
                <input type="date" id="date" name="date" required />
              </div>

              <div className="chack">
                <h5>Choose your nationality</h5>
                <div className="chack2">
                  <label>Mention</label>
                  <input type="radio" id="date" name="date" required />
                  <label>feminine</label>
                  <input type="radio" id="date" name="date" required />
                </div>
              </div>
            </div>

            <h5>Enter your Phone</h5>
            <input type="tel" placeholder="number" maxLength="11" required />

            <h5>Studies</h5>
            <FloatingLabel
              className="option"
              controlId="floatingSelect"
              // label="Works with selects"
            >
              <Form.Select aria-label="Floating label select example">
                {/* <option>Open this select menu</option> */}
                <option value="1">College student</option>
                <option value="2">Master's</option>
                <option value="3">Professor</option>
              </Form.Select>
            </FloatingLabel>

            <h5>Enter your University</h5>
            <input
              type="text"
              placeholder="University"
              maxLength="11"
              required
            />

            <h5>Enter your Section in University</h5>
            <input
              type="hedden"
              placeholder="Section"
              maxLength="11"
              required
            />

            <h5>say something about yourself</h5>
            <textarea
              type="message"
              placeholder="message"
              maxLength="11"
              required
            />
          </div>
        </div>
        <button className="button" type="submit">
          Ensert now
        </button>
      </form>
    </motion.div>
  );
}

export default Insertinfo;
