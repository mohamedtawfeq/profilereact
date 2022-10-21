import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../css/Navbar.css";
import Insertinfo from "./Insertinfo";
import Singin from "./Singin";
import Home from "./Home";
import Viw from "./Viw";
function Navbar() {
  return (
    <div>
      <div className="nav">
        <nav className="Navbar">
          <a href="/" className="logo">
            <h2 className="logo">
              Protfo<span>lio</span>
            </h2>
          </a>
          <ul>
            <li>
              <a href="/"> Home </a>{" "}
            </li>
            <li>
              <a href="info"> Info </a>{" "}
            </li>
            <li>
              <a href="/Viw"> Viw </a>{" "}
            </li>
          </ul>
          <div class="box">
            <a href="singin">
              <ion-icon name="person-circle-outline"></ion-icon>
            </a>
          </div>
        </nav>
        <div className="import">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/singin" element={<Singin />} />
              <Route path="/info" element={<Insertinfo />} />
              <Route path="/viw" element={<Viw />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
