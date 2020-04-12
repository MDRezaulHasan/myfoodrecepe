import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import MyImage from "../img/myImage.jpg";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="about-section">
          <h1>About Us Page</h1>
        </div>
        <h2 style={{ textAlign: "center" }}>Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img
                src={MyImage}
                alt="Md Rezaul Hasan"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>Md Rezaul Hasan</h2>
                <p className="title">Project Developer</p>
                <p>
                  I am a full stack web developer. I have deep experience in API
                  and e-commerce website.
                </p>
                <p>rezaulhasan0168@gmail.com</p>
                <a href="https://mdrezaulhasan3b1s.web.app/">
                  <button className="button">Contact Me</button>
                </a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src="/w3images/team2.jpg" alt="Mike" />
              <div className="container">
                <h2>Mike Ross</h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
         
        </div>
            <button className="active-recipe__button">
                <Link to="/">Back To Home</Link>
            </button>
      </div>
    );
  }
}

export default AboutUs;
