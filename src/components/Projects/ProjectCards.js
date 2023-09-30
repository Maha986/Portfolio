import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import {ImCross} from 'react-icons/im'
import attire_demo from "../../Assets/Projects/videos/attire.mp4"
import cloud3_demo from "../../Assets/Projects/videos/cloud3.mp4"
import notewise_demo from "../../Assets/Projects/videos/notewise.mp4" 
import proprogrammers_demo from "../../Assets/Projects/videos/proprogrammer.mp4"
import ReactPlayer from 'react-player'
function ProjectCards(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="project-card-view">
        <div
          style={{
            height: 168,
            backgroundColor: "white",
            borderRadius: 12,
            margin: "5px auto",
            width: "96%",
          }}
        >
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt="card-img"
            style={{ opacity: "unset !important", height: "100%" }}
          />
        </div>
        <Card.Body style={{ display: "flex", flexDirection: "column" }}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "right", fontSize: "12px" }}>
            <span className="purple">{props.languages}</span>
          </Card.Text>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <div style={{ marginTop: "auto" }}>
            {props.ghlink && (
              <Button variant="primary" href={props.ghlink} target="_blank">
                <BsGithub /> &nbsp;
                {"GitHub"}
              </Button>
            )}
            {"\n"}
            {"\n"}

            {props.video && (
              <Button
                variant="primary"
                onClick={handleShow}
                // href="localhost:3000/"
                style={{ marginLeft: "10px" }}
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
      {
        show &&  <div  style={{    backgroundColor: "#ba9c9c",
          position: "fixed",
          zIndex: 10000,
          top: "13px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          width: "80vw",
          flexDirection: "column",
          height: "90vh",
          left:0,
          right:0,
          margin:"auto"
          }} >
            <button
            style={{    alignSelf: "flex-end",
              marginRight: "10px",
              border: "0px",
              background: "transparent"}}
              onClick={handleClose}
            >
              <ImCross />
            </button>
<ReactPlayer
       
       className='react-player'
       
       url= {props.video==="attire"?attire_demo:(props.video==="cloud3"?cloud3_demo:(props.video==="notewise"?notewise_demo:proprogrammers_demo))} 
       width='90%'
       height='90%'
       controls = {true}

       />
        </div> 
      }
        
       
    </>
  );
}
export default ProjectCards;
