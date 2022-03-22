import "./Services-Section.css";
import { Card, Button, Image, Row, Col } from "react-bootstrap";
import Cabinets from "../images/Cabinets.jpg";

const ServicesSection = () => {
  return (
<Card className="mb-3 mt-3" style={{maxWidth: "540px"}}>
  <Row>
    <Col xs={6} md={4} className="d-flex align-items-center">
    <Image fluid src={Cabinets} alt="card image"/>
    </Col>
    <Col xs={6} md={8}>
      <Card.Body>
        <Card.Title>Cabinet Painting</Card.Title>
        <Card.Text> <small>TopTier provides you with excellency when it comes to cabinet painting/repairing. With high quality paint and
          equipment, your cabinets will look new, see our gallery for photos of happy satisfy customers.
          </small></Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Col>
  </Row>
</Card>
  );
};

export default ServicesSection;
