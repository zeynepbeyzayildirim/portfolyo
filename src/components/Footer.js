import { Container, Col, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from './../assets/img/nav-icon1.svg';
import navIcon2 from './../assets/img/nav-icon2.svg';
import navIcon3 from './../assets/img/nav-icon3.svg';
import React from "react";
import { Newsletter } from "./Newsletter";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center footerBottom">
                    <Row>
                        <Newsletter/>
                    </Row>
                        <Col sm={6} md={6} lg={6} xl={6} className="footerLogo">
                            <img src={logo} alt="Logo" />

                        </Col>

                        <Col sm={6} md={6} lg={6} xl={6} className="text-center text-sm-end footerLogo">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/zeynepbeyzayildirim/" target="_blank"><img src={navIcon1} alt="linkedin" /></a>
                                <a href="https://gitlab.com/zeynepyildirim06" target="_blank"><img src={navIcon2} alt="" /></a>
                                <a href="mailto:zynpbyza0@gmail.com" target="_blank" ><img src={navIcon3} alt="zynpbyza0@gmail.com" /></a>
                            </div>
                            <p>CopyRight 2022. All Right Reversed by Zeynep Beyza Özdemir </p>
                        </Col>

                </Row>
            </Container>
        </footer>
    )
}