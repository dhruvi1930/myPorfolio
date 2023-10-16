import React, { useEffect, useState } from "react";
import backgroundImage from "../../assets/dhruvi.png";
import { Link } from "react-scroll";
import bag from "../../assets/bag.png";
import "./introduction.css";

const Introduction = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsAnimated(true);
    }, 500); // Adjust the delay as needed

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <section id="introduction">
      <div className={`introductionContent ${isAnimated ? "animate" : ""}`}>
        <span className="hey">Hey,</span>
        <span className="introductionText">
          I'm <span className="introductionName">Dhruvi</span>
          <br />
          Full-Stack Developer
        </span>
        <p className="introductionDescription">
          I'm a curious and attention to detail type of person who likes to
          <br />
          develop user-friendly websites and applications
        </p>
        <Link>
          <button className="btn">
            <img src={bag} alt="Hire Me" className="introductionImage" />
            Hire me
          </button>
        </Link>
      </div>
      <img
        src={backgroundImage}
        alt="backgroundImage"
        className="backgroundImage"
      />
    </section>
  );
};

export default Introduction;
