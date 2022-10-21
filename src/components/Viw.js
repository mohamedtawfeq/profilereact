import React from "react";
import "../css/viw.css";
import imgback from "./imgs/riccardo-oliva-C5DLhUkEWfM-unsplash.jpg";
import imgprofile from "./imgs/person.png";
function Viw() {
  return (
    <div className="Viw">
      <div className="imgback">
        <div className="divh1">
          <h1>Software Engineer</h1>
        </div>
        <img className="backround" src={imgback} alt="" />
        <div className="img-name">
          <img className="imgperson" src={imgprofile} alt="" />
          <div className="diteals">
            <h2>Mohamed Tawfiq</h2>
            <h4>Student at College of Computer Science and Mathematics</h4>
          </div>
        </div>
      </div>
      <div className="information">
        <div className="sushalmedia">
          <div className="sushialmeia-2">
            <ion-icon name="school-outline"></ion-icon>
            <h3>University</h3>
          </div>
          <div className="sushialmeia-2">
            <ion-icon name="location-outline"></ion-icon>
            <h3>location</h3>
          </div>
          <div className="sushialmeia-2">
            <ion-icon name="logo-twitter"></ion-icon>
            <h3>twitter</h3>
          </div>
          <div className="sushialmeia-2">
            <ion-icon name="logo-instagram"></ion-icon>
            <h3>moha-tau</h3>
          </div>
          <div className="sushialmeia-2">
            <ion-icon name="logo-facebook"></ion-icon>
            <h3>Mohamed-alsaraf</h3>
          </div>
          <div className="sushialmeia-2">
            <ion-icon name="call-outline"></ion-icon>
            <h3>07709990958</h3>
          </div>
        </div>
        <div className="informationright">
          <div className="top1">
            <div className="topfolloing">
              <h2>
                Hi My Name Is : <h1>mohamed tawfiq</h1>
              </h2>
              <h2>
                I live in : <h1>Iraq</h1>
              </h2>
              <h2>
                I study in college : <h1> Computer Science and Mathematics</h1>
              </h2>
            </div>
          </div>
          <div className="top2">
            <h2>myself</h2>
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem, quos. Amet quas neque similique nesciunt, officia
              consequuntur quia, fugit labore, vel aperiam non. Voluptatem
              placeat non odit amet esse quibusdam!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viw;
