import React from "react";
import "./education.css";
import degree from "../../assets/degree.png";

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="educationContainer">
        <div className="degrees">
          <img src={degree} alt="Degree" className="degreeImage" />
          <div className="details">
            <span className="degreeHeading">Bachelor of Technology</span>
            <span className="degreeCourse">Computer Engineering</span>
            <span className="degreeLocation">
              Birla Vishvkarma Mahavidhyalaya
            </span>
            <span className="grade">Grade: 8.26/10</span>
            <span className="year">Year: 2017-2021</span>
          </div>
        </div>
        <div className="degrees">
          <img src={degree} alt="Degree" className="degreeImage" />
          <div className="details">
            <span className="degreeHeading">Post Graduate Certificate</span>
            <span className="degreeCourse">Mobile Solutions Development</span>
            <span className="degreeLocation">Conestoga College</span>
            <span className="grade">Grade: 3.89/4</span>
            <span lassName="year">Year: 2022-2023</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
