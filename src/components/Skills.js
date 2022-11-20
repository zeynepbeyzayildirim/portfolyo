import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import merter1 from "./../assets/img/meter1.svg";
import merter2 from "./../assets/img/meter2.svg";
import merter3 from "./../assets/img/meter3.svg";
import merter4 from "./../assets/img/meter4.svg";
import merter5 from "./../assets/img/meter5.svg";
import merter6 from "./../assets/img/meter6.svg";
import merter7 from "./../assets/img/meter7.svg";
import merter8 from "./../assets/img/meter8.svg";
import colorSharp from "./../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }, };

   /* function SkilsItem({imgUrl},{title}){
      return(
        <div className="item">
        <img src={imgUrl} alt="Image" />
        <h5>{title}</h5>
      </div>
      )
    }*/
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Software technologies are a vast universe that is developing day
                by day. Along with learning the following technologies, I
                continue to improve myself in the fields of Mobile applications
                and Web applications day by day.{" "}
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
           
                <div className="item">
                  <img src={merter1} alt="Image" />
                  <h5>Flutter/Dart</h5>
                </div>
                <div className="item">
                  <img src={merter2} alt="Image" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={merter3} alt="Image" />
                  <h5>Html/Css</h5>
                </div>
                <div className="item">
                  <img src={merter7} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={merter4} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={merter6} alt="Image" />
                  <h5>C#</h5>
                </div>
                <div className="item">
                  <img src={merter5} alt="Image" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={merter8} alt="Image" />
                  <h5>RestAPI</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp}></img>
    </section>
  );
};
