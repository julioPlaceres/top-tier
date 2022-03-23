import "./Services-Section.css";
import { Container } from "react-bootstrap";
import CardServices from "../Card/Card-Services";

const ServicesSection = () => {
  return (
    <Container className="services-background">
      <CardServices />
    </Container>
  );
};

export default ServicesSection;
