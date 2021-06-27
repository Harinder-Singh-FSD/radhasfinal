import React from "react";
import { Alert } from "react-bootstrap";
import book from "../assets_images/book.png"
import CallUs from "../components/CallUs";

const CookBookPage = () => {
  return (
    <div style={{textAlign:'center'}}>
         <h4 style={{ lineHeight: "1.5", color: "#00004d",margin:"2rem" }}>
                  Join our cooking courses and receive a gift of a hardbound
                  Ekadashi Recipe Cookbook
                  <br />
                  Feast on Fasting Day! Limited time offer!
                </h4>
      <img
        src={book}
        style={{  margin: "auto",width:"90vw"}}
        alt="logo"
        // id="book"
      />

      <Alert
        style={{
          backgroundColor: "#00004d",
          color: "white",
          marginTop: "20px",
        }}
      >
        *One-time, Gift applicable while book supplies last and shipping
        restrictions may apply.
      </Alert>

      <div style={{display:"flex", alignItems: "center",justifyContent: "center",width:"100%"}}><p><CallUs/></p></div>
    </div>
  );
};

export default CookBookPage;
