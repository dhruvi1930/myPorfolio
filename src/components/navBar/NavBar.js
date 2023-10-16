import React, { useState } from "react";
import "./navBar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png";

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="navBar">
      <Link
        activeClass="active1"
        to="introduction"
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
      >
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="navBarMenu">
        <Link
          className="navBarMenuListItem"
          activeClass="active"
          to="introduction"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
        >
          Home
        </Link>
        <Link
          className="navBarMenuListItem"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
        >
          About
        </Link>
        <Link
          className="navBarMenuListItem"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
        >
          Projects
        </Link>
        <Link
          className="navBarMenuListItem"
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
        >
          Skills
        </Link>
        <Link
          className="navBarMenuListItem"
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
        >
          Education
        </Link>
      </div>
      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShow(!show)}
      />
      <div className="navMenu" style={{ display: show ? "flex" : "none" }}>
        <Link
          className="listItem"
          activeClass="active"
          to="introduction"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onClick={() => setShow(false)}
        >
          Home
        </Link>
        <Link
          className="listItem"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onClick={() => setShow(false)}
        >
          About
        </Link>
        <Link
          className="listItem"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onClick={() => setShow(false)}
        >
          Projects
        </Link>
        <Link
          className="listItem"
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onClick={() => setShow(false)}
        >
          Skills
        </Link>
        <Link
          className="listItem"
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onClick={() => setShow(false)}
        >
          Education
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
