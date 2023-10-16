import React from "react";
import northernDevsLogo from "../../assets/northernDevsLogo.png";
import vscode from "../../assets/vscode.png";
import firebase from "../../assets/firebase.png";
import webflow from "../../assets/webflow.png";
import sendGrid from "../../assets/sendGrid.png";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="aboutHeading">What I do</div>
      <div className="aboutContent">
        <img
          src={northernDevsLogo}
          alt="Northern Devs"
          className="northernDevsLogo"
        />
        <div className="aboutParagraph">
          I'm a full-stack developer at Northern-Devs for more than 10 months.
          <br />I mainly focus on implementing and designing of TypeScript
          <br />
          components and Firebase cloud functions for Launchpad.
        </div>
      </div>
      <div className="tools">
        <div className="toolBar">
          <div className="toolBarText">
            <span className="toolHeading">Visual Studio Code</span>
            <p className="toolDescription">
              Proficiently utilized Visual Studio Code as the primary IDE for
              efficient development, code editing, and streamlined workflows.
            </p>
          </div>
          <img src={vscode} alt="vsCode" className="toolImage" />
        </div>
        <div className="toolBar">
          <div className="toolBarText">
            <span className="toolHeading">Firebase Database</span>
            <p className="toolDescription">
              Expertly integrated Firebase Database to facilitate real-time data
              storage, retrieval, and dynamic content updates in web
              applications.
            </p>
          </div>
          <img src={firebase} alt="firebase" className="toolImage" />
        </div>
        <div className="toolBar">
          <div className="toolBarText">
            <span className="toolHeading">SendGrid</span>
            <p className="toolDescription">
              Proficiently employed SendGrid for email template design,
              connecting templates to the server via template IDs and sending
              necessary data in JSON format for customer sign-ups and
              transaction notifications.
            </p>
          </div>
          <img src={sendGrid} alt="senGrid" className="toolImage" />
        </div>
        <div className="toolBar">
          <div className="toolBarText">
            <span className="toolHeading">WebFlow</span>
            <p className="toolDescription">
              Collaborated with clients and leveraged WebFlow to deliver
              visually stunning and functional websites, enhancing the external
              appeal of Northern Devs' projects.
            </p>
          </div>
          <img src={webflow} alt="webflow" className="toolImage" />
        </div>
      </div>
    </section>
  );
};

export default About;
