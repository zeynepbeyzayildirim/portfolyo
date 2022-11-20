import React from "react";
import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import contactmeImg from '../assets/img/contactme-img.svg';

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <div id="newsletter">
    <section>
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={6} md={6} xl={6}>
            <h3>Contact Me!</h3>
              <h5>🕊 zynpbyza0@gmail.com<br/>☎ +90 (507) 042-2729<br/>⛺ Çiğli/İZMİR
              </h5>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
              
            </Col>
            <img src={contactmeImg} alt="Contact Img"></img>
            
          </Row>
        </div>
      </Col>
      </section>
      </div>
  )
}