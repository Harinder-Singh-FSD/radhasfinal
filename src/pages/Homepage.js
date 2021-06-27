import React from "react";
import "./Homepage.css";
// import bookcp from "../images/bookcp.png";
// import logo from "../images/logo.png";
import { Alert, Col, ListGroup, Row } from "react-bootstrap";
import { motion } from "framer-motion";

import { Typography } from "@material-ui/core";
import FlipCard from "../components/FlipCard";
import CallUs from "../components/CallUs";
const Homepage = () => {
  const list = [
    {
      title: "Cooking Courses ",
      description:
        "Workshops, for group & couples, private and summer camps for children",
      imgUrl:
        "https://t3.ftcdn.net/jpg/02/44/98/50/360_F_244985001_JkE2leAeXd0h91yOOXrq2Gfl7OKOg0qp.jpg",
    },
    {
      title: "Catering for all occasions",
      description: "Weddings, Engagement, Birthdays and More",
      imgUrl: "https://thumb.mp-farm.com/48003313/thumb.jpg",
    },
    {
      title: "Deity Spa Services ",
      description:
        "Bathing, Massaging, Retouch, Repair, Painting, Outfits, and Jewellery",
      imgUrl:
        "https://thumbs.dreamstime.com/b/pastel-background-abstract-blur-jewelry-copy-space-beautiful-blurred-delicate-pink-female-chain-204726250.jpg",
    },
    {
      title: "Customised altar ",
      description: "Temple altars of all sizes and materials",
      imgUrl:
        "https://media.istockphoto.com/photos/detail-of-radha-krishna-deity-on-the-altar-hindu-god-and-goddess-with-picture-id1273903570",
    },
    {
      title: "Art Classes ",
      description: "Sketches, Charcoal, Pastels, Acrylics and Oil painting",
      imgUrl:
        "https://image.freepik.com/free-photo/school-classroom-blur-background-without-young-student-blurry-view-elementary-class-room-no-kid-teacher-with-chairs-tables-campus-vintage-effect-style-pictures_1253-1375.jpg",
    },
    {
      title: "Paintings by events ",
      description:
        "We create family, spiritual, and wedding couples’ paintings",
      imgUrl: "https://m.media-amazon.com/images/I/61iZI9JApSL._AC_SL1134_.jpg",
    },
  ];
  return (
    <>
      <div id="parallax-world-of-ugg" style={{ textAlign: "center" }}>
        <section>
          <div class="parallax-one" style={{ textAlign: "center" }}>
            <h2 style={{ textShadow: "0 2px 2px #3a387e", color: "#eb588d" }}>
              Radha's
            </h2>
          </div>
        </section>

        <section style={{ textAlign: "center" }}>
          <div
            class="block"
            style={{
              backgroundColor: "#e8e8e8",
              color: "#00004d",
              width: "100%",
              textAlign: "center",
            }}
          >
            <div
              style={{
                textAlign: "center",
                width: "80vw",
                margin: "auto",
                padding: "50px 0",
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  margin: "3rem",
                  fontSize: "3rem",
                  color: "#23296a",
                  textDecoration: "underline",
                }}
              >
                About us
              </h1>

              <h6
                style={{
                  lineHeight: "2",
                  textAlign: "justify",
                  fontFamily: "'Merriweather', 'serif'",
                  color: "black",
                  marginBottom: "2.5rem",
                }}
              >
                We offer with love and even plain water will taste sweet.
                Prepare a meal from heart and it becomes an offering worthy to
                serve Kṛṣṇa. We believe everything belongs to Kṛṣṇa and Kṛṣṇa
                belongs to His beloved Srimati RadhaRani. We are a Kṛṣṇa
                conscious family in Stanmore, UK with our life and efforts
                dedicated to living a spiritually balanced life. With Radha’s,
                we offer a plethora of services:
              </h6>
              <div
                style={{
                  height: "1px",
                  borderBottom: "1px solid #f183bd",
                  width: "auto",
                  textAlign: "center",
                }}
              />
              <Row
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  width: "100%",
                  margin: "auto",
                }}
              >
                {list.map((item) => {
                  return (
                    <Col style={{ margin: "1rem" }}>
                      <FlipCard item={item} />
                    </Col>
                  );
                })}
              </Row>

              <div
                style={{
                  height: "1px",
                  borderBottom: "1px solid #f183bd",
                  width: "auto",
                  margin: "1rem",
                }}
              />
            </div>
            <div
              style={{
                textAlign: "center",
                width: "80vw",
                margin: "auto",
                padding: "50px 0",
              }}
            >
              <h6
                style={{
                  lineHeight: "2",
                  textAlign: "justify",
                  fontFamily: "'Merriweather', 'serif'",
                  color: "black",
                  marginBottom: "2.5rem",
                }}
              >
                We are culinary and gourmet artists/professional chefs with over
                30 years of experience. We are passionate about creating
                traditional Indian, Sattvik, Ekadashi, spiritual (onion & garlic
                free), and fusion recipes. It is mentioned in religious texts,
                Puranas, that Srimati RadhaRani offers 108 Bhoga/meal
                preparations to Kṛṣṇa each day without repeating any single
                recipe for an eternity. Our attempt is to teach you to cook not
                just for yourself and your family’s palates but also for
                spiritual benefit. Inner satisfaction comes from pleasing others
                and who better to please and serve than Kṛṣṇa and then share it
                with your family. We invite you to join our cooking courses and
                enjoy an amazing experience to last a lifetime.
              </h6>
            </div>
          </div>
        </section>

        <section style={{width:"100%"}}>
          <div
            class="block"
            style={{
              backgroundImage: `URL(https://images.pond5.com/orange-pink-peaceful-sky-fluffy-088026629_prevstill.jpeg)`,
              width:"100%", margin:"auto"
            }}
          >
            <h2 style={{ color: "#eb5180", padding: "2rem" }}>
              Feast on Fasting Day
            </h2>

            <Row style={{
                textAlign: "center",
                display:"flex", alignItems: "center",justifyContent: "center",textAlign: "center",
                width:"100%",margin:"auto"
              }}>
              <Col lg={4}>
                <h4 style={{ lineHeight: "2", color: "#00004d" }}>
                  Join our cooking courses and receive a gift of a hardbound
                  Ekadashi Recipe Cookbook
                  <br />
                  Feast on Fasting Day! Limited time offer!
                </h4>
              </Col>
                <Col lg={6} style={{textAlign: "center",display:"flex", alignItems: "center",justifyContent: "center"}}>
                  <img
                    src="https://res.cloudinary.com/dvc56ayit/image/upload/v1619803856/radha%27s/bookcp_wlyhxz.png"
                    style={{ width: "100%", margin: "auto", height: "100%" }}
                    alt="logo"
                    // id="book"
                  />
                </Col>

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
            </Row>
          </div>
        </section>
        <div style={{display:"flex", alignItems: "center",justifyContent: "center",width:"100%",marginTop:"2rem"}}><p><CallUs/></p></div>
      </div>
    </>
  );
};

export default Homepage;
