import React from "react";
import { Col, Row } from "react-bootstrap";
import GoogleMap from "./GoogleMap";

const CookingCardLower = () => {
  return (
    <div>
      <hr />
      <Row style={{ margin: "1.5rem" }}>
        <Col lg={3} md={3} style={{ margin: "1.5rem", textAlign: "left" }}>
          <h3>What you’ll experience</h3>
        </Col>
        <Col lg={8} md={7} style={{ margin: "1.5rem", textAlign: "left" }}>
          <div>
            <h3>Face-to-Face / In-person:</h3>
            <br />
            <p>
              With our face-to-face cooking classes, you will get to learn,
              participate, and have fun creating mouth-watering recipes in our
              gourmet kitchen located in Stanmore,UK. The courses are designed
              for all levels of passionate enthusiasts of cooking. So have no
              fear, whether you’re a Beginner or the Master Chef of your family,
              you’ll love creating delicious recipes. We will soon be adding
              Online courses via Zoom
            </p>
            <br />
            <hr />
            <br />
            <h3>You’ll learn and get</h3>
            <br />

            <ul>
              <li>Intro to various spices used for the specific recipes</li>
              <li>
                Useful tips and tricks to enhance the flavour and texture of the
                recipes
              </li>
              <li>Participate preparing the recipes</li>
              <li>Emailed copy of the recipes</li>
            </ul>
            <br />
            <hr />
            <br />
            <h3>What to bring to a face-to-face class</h3>
            <br />

            <ul>
              <li>Your enthusiasm and passion for cooking</li>
              <li>Hair tied back or away from face for hygienic purposes</li>
              <li>
                Inform us ahead of your class about any dietary/allergic
                conditions you may have
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col lg={3} md={3} style={{ margin: "1.5rem", textAlign: "left" }}>
          <h3>Who is this class for?</h3>
        </Col>
        <Col lg={8} md={7} style={{ margin: "1.5rem", textAlign: "left" }}>
          <p>
            Our face-to-face classes are great indoor activity for individuals,
            couples, children (call us for details) and groups with all levels
            of cooking experience. And our soon to start Virtual classes are
            equally fun filled for those preferring to learn online.
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col lg={3} md={3} style={{ margin: "1.5rem", textAlign: "left" }}>
          <h3>Location</h3>
        </Col>
        <Col lg={8} md={7} style={{ margin: "1.5rem", textAlign: "left" }}>
          <p>8 Hilltop WayStanmore, Harrow</p>
          <GoogleMap />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col lg={3} md={3} style={{ margin: "1.5rem", textAlign: "left" }}>
          <h3>Course Fees</h3>
        </Col>
        <Col lg={8} md={7} style={{ margin: "1.5rem", textAlign: "left" }}>
          <p>
            All cooking courses are available Saturdays and Sundays. Select from
            any of the below listed course packages. Face-to-Face / In-person
            courses: £45
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col lg={3} md={3} style={{ margin: "1.5rem", textAlign: "left" }}>
          <h3>Your Safety</h3>
        </Col>
        <Col lg={8} md={7} style={{ margin: "1.5rem", textAlign: "left" }}>
          <p>
            Your safety is paramount to us. Our kitchen and cooking courses are
            designed toput your safety first. We follow all Covid rules and
            regulations, therefore, courses will be conducted only when it is
            safe to do so as per the government guidelines. We are also
            certified by the Health Food and Safety to conduct this business on
            our premises.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default CookingCardLower;
