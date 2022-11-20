import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { useState, useEffect, Component } from "react";
import React, { useRef } from "react";
import logo from "./../assets/img/logo.svg";
import navIcon1 from "./../assets/img/nav-icon1.svg";
import navIcon2 from "./../assets/img/nav-icon2.svg";
import navIcon3 from "./../assets/img/nav-icon3.svg";
import cv from "../assets/file/Zeynep-Beyza-Ozdemir-CV.pdf";

export const NavBarHeader = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  // Function will execute on click of button

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(cv).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = { cv };
        alink.click();
      });
    });
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <NavbarBrand href="#home">
          <img className="logo" src={logo} alt="Logo" />
        </NavbarBrand>
        <NavbarToggle aria-controls="basic-nav-dropdown">
          <span className="navbar-toggler-icon"></span>
        </NavbarToggle>

        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}>
              Home
            </NavLink>
            <NavLink
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}>
             Skills
            </NavLink>
            <NavLink
              href="#project"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}>
              Projects
            </NavLink>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/zeynepbeyzayildirim/"
                target="_blank">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://gitlab.com/zeynepyildirim06" target="_blank">
                <img src={navIcon2} alt="" />
              </a>
              <a href="mailto:zynpbyza0@gmail.com" target="_blank">
                <img src={navIcon3} alt="zynpbyza0@gmail.com" />
              </a>
            </div>

            <button className="navbar-text" onClick={onButtonClick}>
              <span>PDF Export 🖨️ </span>
            </button>
          </span>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};
