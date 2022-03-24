import "./Services-Section.css";
import { Container } from "react-bootstrap";
import CardServices from "../Card/Card-Services";
import Cabinets from "../images/Cabinets.jpg";

const ServicesSection = () => {
  return (
    <Container>
      <CardServices title="Cabinet Painting"
      text="TopTier provides you with excellency when it comes to cabinet painting/repairing. With high quality paint and
      equipment, your cabinets will look new, see our gallery for photos of happy satisfy customers."
      btnText="See more"
      src={Cabinets}/>

<CardServices title="Cabinet Repairing"
      text="Top Tier repairing services."
      btnText="See gallery"/>
    </Container>
  );
};

export default ServicesSection;
