import React from "react";
import { Button } from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";
const FlipCard = ({item}) => {
  let flippy;
  let { title, imgUrl, description } = item
  return (
    <Flippy
      flipOnHover={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={(r) => (flippy = r)} // to use toggle method like this.flippy.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{height: "250px",margin:'auto',width:"270px" ,borderRadius:"50px"}} /// these are optional style, it is not necessary
    >
      <FrontSide
        style={{
          backgroundImage: `URL(${imgUrl})`,
          backgroundPosition:"center",
          backgroundSize:"cover",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          fontSize: "20px",
          color:'black',
          textAlign:'center',
          zIndex:2,
          borderRadius:"10px"
        }}
      >
          <p style={{fontSize:'2rem',lineHeight:"35px",color:'#212661',textShadow:"2px white",fontWeight:"600"}}>
        {title}
        </p>
      </FrontSide>
      <BackSide
        style={{

          alignItems: "center",
          backgroundColor:"#252b70",
          justifyContent: "row",
          fontSize: "16px",
          borderRadius:"8px",
          color:"white"
        }}
      >
          <p style={{height:'15vh',color:"white",fontSize:"16px"}}>
        {description}
        </p>
      <Button
                variant="outline-primary"
                style={{
                  backgroundColor:
                    "#e15185",
                  color: "white",
                  border: "1px solid #57CDEE",
                  borderRadius: "5px",
            
                  width:"fit-content",
                  fontSize:"20px",
                  margin:"2rem"
                }}
  
              >Check More</Button>
      </BackSide>
    </Flippy>
  );
};

export default FlipCard;
