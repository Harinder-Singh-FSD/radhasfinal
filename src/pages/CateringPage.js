import React from "react";
import { Col, Row } from "react-bootstrap";
import FlipCard from "../components/FlipCard";
import CallUs from "../components/CallUs"
const CateringPage = () => {
  const list = [
    {
      title: "Vegan",
      description: "Our range of vegan food",
      imgUrl:
        "https://images.startsat60.com/wp-content/uploads/20160714110323/140716_blurred_vegetables.jpg",
    },
    {
      title: "Vegetarian",
      description: "Weddings, Engagement, Birthdays and More",
      imgUrl:
        "https://image.freepik.com/free-photo/blurred-background-blur-people-shopping-product-shelf-supermarket-background_7190-2028.jpg",
    },
    {
      title: "Jain (Onion & Garlic free)",
      description: "– Onion & Garlic free dishes",
      imgUrl:
        "https://previews.123rf.com/images/vicu9/vicu91801/vicu9180100705/94398848-picture-blurred-for-background-abstract-blur-food-in-restaurant.jpg",
    },
    {
      title: "Fusion ",
      description: "Checkout our range of fusion dishes",
      imgUrl:
        "https://i2.wp.com/www.alphr.com/wp-content/uploads/2020/10/5-38.jpg?resize=536%2C709",
    },
    {
      title: "Diet/Allergen specific",
      description: "Food for every individual",
      imgUrl: "https://ak.picdn.net/shutterstock/videos/4441646/thumb/6.jpg",
    },
    {
      title: "Desserts",
      description: "Creative mouth-watering desserts",
      imgUrl:
        "https://thumbs.dreamstime.com/b/three-macaroons-bright-pastel-pink-background-blur-no-focus-macro-side-view-concept-copy-space-french-dessert-violet-white-neon-175453393.jpg",
    },
    {
      title: "Desserts and Wedding Cakes",
      description: "Cakes for your auspicious moments",
      imgUrl:
        "https://previews.123rf.com/images/jittawit/jittawit1804/jittawit180400178/100407311-blurred-photo-wedding-atmosphere-big-cake-in-the-middle-of-the-job-romantic-dream-the-color-of-the-w.jpg",
    },
    {
      title: "Ekadashi menu!",
      description: "Our famous scrumptious full Ekadashi menu!",
      imgUrl:
        "https://image.freepik.com/free-photo/blurred-food-tray_1203-1417.jpg",
    },
    {
      title: "Explore more!",
      description: "Explore more of our dishes and services",
      imgUrl:
        "https://image.freepik.com/free-photo/perspective-wood-blurred-restaurant-with-bokeh-background-foods-drinks_2379-990.jpg",
    },
  ];

  return (
    <div style={{ textAlign: "center", margin: "1.5rem" }}>
      <h1
        style={{
          textAlign: "center",
          margin: "2rem",
          fontWeight: "700",
          color: "#242b71",
        }}
      >
        RADHAS CATERING
      </h1>
      <hr />
      <h3 style={{color:"#b84c7c",margin:"1rem" ,textAlign:"justify",lineHeight:"2.5rem"}}>
        We offer catering services for all occasions! <br/>It’s your special occasion,
        the menu should be of your choice! Our menus are unique and customised
        to your desire. Please note, all our menu items are onionand garlic
        free.<br/>We offer a huge variety of menu selection ranging from:
      </h3>
      <Row
        style={{
          margin: "1rem",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {list.map((item) => {
          return (
            <Col lg={3} md={3} style={{ margin: "10px", textAlign: "center" }}>
              <FlipCard item={item} />
            </Col>
          );
        })}
        
      </Row>
      <div style={{display:"flex", alignItems: "center",justifyContent: "center",width:"100%"}}><p><CallUs/></p></div>
      
    </div>
  );
};

export default CateringPage;
