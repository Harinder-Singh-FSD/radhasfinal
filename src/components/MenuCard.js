import React from "react";
import { Card, Button } from "react-bootstrap";

const MenuCard = (props) => {
  return (
    <Card style={{ width: "auto"}}>
      <Card.Img
        variant="top"
        src="https://spacehuntr.com/wp-content/uploads/2020/11/Vegan-Catering-via-iamexpat-1.jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default MenuCard;
