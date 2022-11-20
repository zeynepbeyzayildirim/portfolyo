import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "./../assets/img/header-img.svg";
import "animate.css";
import TrackVisiblity from "react-on-screen";

function handleScroll() {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0,
    behavior: "smooth",
  });
}

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Mobile Developer",
    "Web Front-end Developer",
    "Web Designer",
    "UI/UX Designer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 185;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={12} xl={7} className="myOrderText">
            <TrackVisiblity>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Zeynep Özdemir `}
                   
                  </h1> 
                  <h1 className="autoText">
                    <span className="autoText">{text}</span>
                  </h1>
                  <p>

                    I studied in software enginnering and gradauted from Manisa
                    Celal Bayar University at (2017-2022) 👩‍🎓. For about 3 years,
                    I have been developing mobile applications that offer
                    special solutions to customers and managing these processes.
                    I want to direct my career in the field of Web-Frontend. I
                    am a fresh software engineer who can learn quickly, think,
                    be disciplined and responsible, inclined to teamwork,
                    willing to improve myself in leadership.
                    <br /> <br />I want to add value to your company with my
                    entrepreneurial, enthusiastic and energetic personality.😉
                  </p>

                  <button onClick={handleScroll}>
                    Let's Connect <ArrowRightCircle size={25} />{" "}
                  </button>
                </div>
              )}
            </TrackVisiblity>
          </Col>
          <Col xs={12} md={12} xl={5} className="myOrderImg">
            <img src={headerImg} alt="Header Img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Banner;
