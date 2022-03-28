import "./Services-Section.css";
import { Container } from "react-bootstrap";
import CardServices from "../Card/Card-Services";
import painting from "../images/PaintService.png";
import repairing from "../images/RepairService.png";
import design from "../images/DesignService.png";

const ServicesSection = () => {
  return (
    <Container className="d-flex justify-content-center">
      <h2 style={{color: "brown"}} className="col-sm-12 col-md-12 col-lg-12 mb-5 mt-5">The services we provide</h2>
      <CardServices title="Cabinet Painting"
      text="Top Tier provides excellent cabinet painting/repairing service. With high-quality paint and
      equipment, your cabinets will look new.  See our gallery for photos of our work."
      btnText="See more"
      src={painting}/>

<CardServices title="Cabinet Repairing"
      text="Top Tier repairing services."
      src={repairing}
      btnText="See gallery"/>

<CardServices title="Cabinet Design"
      text="Top Tier design services."
      src={design}
      btnText="See gallery"/>

    </Container>
  );
};

export default ServicesSection;
