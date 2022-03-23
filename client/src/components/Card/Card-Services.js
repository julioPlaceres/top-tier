import "./Card-Services.css";
import { Card, Button } from "react-bootstrap";
import Cabinets from "../images/Cabinets.jpg";

const CardServices = () => {
  return (
<Card border="light" style={{ width: "20rem"}} className="mx-auto">
    <Card.Img variant="top" src={Cabinets} alt="card image" style={{maxWidth: "200px", backgroundColor: "brown"}} className="mx-auto"/>
      <Card.Body style={{backgroundColor: "brown"}}>
        <Card.Title>Cabinet Painting</Card.Title>
        <Card.Text> <small>TopTier provides you with excellency when it comes to cabinet painting/repairing. With high quality paint and
          equipment, your cabinets will look new, see our gallery for photos of happy satisfy customers.
          </small></Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
</Card>
  );
};

export default CardServices;