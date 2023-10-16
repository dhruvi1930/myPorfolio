import React from "react";
import "./projects.css";
import editor from "../../assets/editor.png";
import eCommerce from "../../assets/eCommerce.png";
import healthCard from "../../assets/healthCard.png";
import formFiller from "../../assets/formFiller.png";
import virtualTherapist from "../../assets/virtualTherapist.png";
import reservation from "../../assets/reservation.png";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectsTitle">My Projects</h2>
      <div className="projectsWrapper">
        <div className="projectsContainer">
          <div className="container">
            <img src={editor} alt="Editor" className="projectImage" />
            <h3>Editor</h3>
            <p className="projectDescription">
              With the use of RectJs, I have developed editor for merely HTML
              and CSS with preview using react library
            </p>
            <a href="https://github.com/dhruvi1930/editor">
              <button className="btnProject">GitHub </button>
            </a>
          </div>
          <div className="container">
            <img src={eCommerce} alt="E-Commerce" className="projectImage" />
            <h3>E-Commerce</h3>
            <p className="projectDescription">
              With the use of RectJs and php for backend, we have developed
              e-commerce website with features like rating and stripe payment
              method.
            </p>

            <a href="https://github.com/prog8185-f22/Project_Group4">
              <button className="btnProject">GitHub</button>
            </a>
          </div>
          <div className="container">
            <img src={healthCard} alt="Health Card" className="projectImage" />
            <h3>Health Card</h3>
            <p className="projectDescription">
              Developed a web application with my team members for efficient
              maintenance of health records and analysis of trend in record. We
              used HTML, CSS, Ajax, PHP and MySQL for implementation.
            </p>

            <a href="https://github.com/dhruvi1930/Health-Card">
              <button className="btnProject">GitHub</button>
            </a>
          </div>
          <div className="container">
            <img src={formFiller} alt="Form Filler" className="projectImage" />
            <h3>Automatic Form Filler</h3>
            <p className="projectDescription">
              Built OCR model using ResNet and integrated it with Flask.
            </p>

            <a href="https://github.com/dhruvi1930/form-filler">
              <button className="btnProject">GitHub </button>
            </a>
          </div>
          <div className="container">
            <img
              src={virtualTherapist}
              alt="Virtual Therapist"
              className="projectImage"
            />
            <h3>Virtual Therapist</h3>
            <p className="projectDescription">
              Image preprocessing and Feature extraction from Speech from
              RAVDESS dataset using Mel Frequency Coefficients(MFCC) for emotion
              detection and integrated the model in GUI based in Python
            </p>

            <a href="https://github.com/dhruvi1930/virtual-therapist">
              <button className="btnProject">GitHub</button>
            </a>
          </div>
          <div className="container">
            <img
              src={reservation}
              alt="Bus Reservation"
              className="projectImage"
            />
            <h3>Bus Reservation</h3>
            <p className="projectDescription">
              This application basically uses a WPF application to make and
              cancel bus reservations. Passengers have the option of booking a
              seat in advance and can view the seats that have already been
              reserved.
            </p>
            <a href="https://github.com/dhruvi1930/Bus-Reservation">
              <button className="btnProject">GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
