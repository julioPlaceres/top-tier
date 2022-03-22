import "./Services-Section.css";
import { Card, Button } from "react-bootstrap";
import Cabinets from "../images/Cabinets.PNG";

const ServicesSection = () => {
  return (
    <div className="services-section">
      <Card>
        <Card.Img variant="top" src={Cabinets} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServicesSection;
