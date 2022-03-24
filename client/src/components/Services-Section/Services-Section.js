import "./Services-Section.css";
import { Container } from "react-bootstrap";
import CardServices from "../Card/Card-Services";
import Cabinets from "../images/Cabinets.jpg";

const ServicesSection = () => {
  return (
    <Container>
      <CardServices title="Cabinet Painting"
      text="Top Tier provides excellent cabinet painting/repairing service. With high-quality paint and
      equipment, your cabinets will look new.  See our gallery for photos of our work."
      btnText="See more"
      src={Cabinets}/>

<CardServices title="Cabinet Repairing"
      text="Top Tier repairing services."
      btnText="See gallery"/>
    </Container>
  );
};

export default ServicesSection;
