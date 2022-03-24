import "./Services-Section.css";
import { Container } from "react-bootstrap";
import CardServices from "../Card/Card-Services";
import cabinet1 from "../images/Cabinets_1.jpg";
import cabinet2 from "../images/Cabinets_2.jpg";

const ServicesSection = () => {
  return (
    <Container>
      <CardServices title="Cabinet Painting"
      text="TopTier provides you with excellency when it comes to cabinet painting/repairing. With high quality paint and
      equipment, your cabinets will look new, see our gallery for photos of happy satisfy customers."
      btnText="See more"
      src={cabinet1}/>

<CardServices title="Cabinet Repairing"
      text="Top Tier repairing services."
      src={cabinet2}
      btnText="See gallery"/>
    </Container>
  );
};

export default ServicesSection;
