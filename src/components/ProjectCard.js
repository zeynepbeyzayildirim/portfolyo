import React from "react"
import { Col } from "react-bootstrap"



export const ProjectCard = ({title,description,imgUrl,linkUrl}) => {
   return(
    <Col sm={6} md={4}>
        <div className="proj-imgbx">
         <img src={imgUrl} />
         <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <span>{linkUrl}</span>
         </div>
         </div>
    </Col>
   )
}