import React from "react";
import "./skills.css";
import frontEnd from "../../assets/frontend.png";
import backEnd from "../../assets/backend.png";
import database from "../../assets/database.png";
import versionControl from "../../assets/versionControl.png";
import testing from "../../assets/testing.png";
import task from "../../assets/management.png";
import soft from "../../assets/softSkill.png";

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="skillsTitle">Skills</h2>
      <div className="skillContent">
        <img src={frontEnd} alt="Front End" className="skillImage" />
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>React Native</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Styled Components</li>
        </ul>
      </div>
      <div className="skillContent">
        <img src={backEnd} alt="Back End" className="skillImage" />
        <ul>
          <li>Node.js</li>
          <li>Python</li>
          <li>PHP</li>
          <li>Java</li>
          <li>C#</li>
          <li>C++</li>
          <li>C</li>
        </ul>
      </div>
      <div className="skillContent">
        <img src={database} alt="Database" className="skillImage" />
        <ul>
          <li>Firebase</li>
          <li>MySQL</li>
          <li>phpMyAdmin</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div className="skillContent">
        <img
          src={versionControl}
          alt="Version Control"
          className="skillImage"
        />
        <ul>
          <li>GitHub</li>
          <li>Bitbucket</li>
          <li>SourceTree</li>
        </ul>
      </div>
      <div className="skillContent">
        <img src={testing} alt="Testing tool" className="skillImage" />
        <ul>
          <li>Selenium</li>
          <li>Postman</li>
          <li>Jest</li>
        </ul>
      </div>
      <div className="skillContent">
        <img src={task} alt="Task Management" className="skillImage" />
        <ul>
          <li>Jira</li>
          <li>Microsoft Azure</li>
        </ul>
      </div>
      <div className="skillContent">
        <img src={soft} alt="Soft Skill" className="skillImage" />
        <ul>
          <li>Multi-task</li>
          <li>Under Pressure</li>
          <li>Communication skills</li>
          <li>Interpersonal skills</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
