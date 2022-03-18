import { Container, Col, Row } from "react-bootstrap";
import EmailIcon from "../Link-Icons/Email";
import PhoneIcon from "../Link-Icons/Phone";
import Facebook from "../Link-Icons/Facebook";
import Twitter from "../Link-Icons/Twitter";
import Instagram from "../Link-Icons/Instagram";
import Linkedin from "../Link-Icons/Linkedin";
import Youtube from "../Link-Icons/Youtube";
import "./TopNavBar.css";

// TODO: Add proper formatting, consider using containers instead of div (Just a thought)

const TopNavBar = () => {
  return (
    <Container fluid className="bg-light">
      <Row>
        <Col xs={1} md={6} lg={3} className="email">
          <EmailIcon />
        </Col>

        <Col xs={5} md={6} lg={3} className="phone">
          <PhoneIcon />
        </Col>
        <Col xs={1} className="facebook">
          <Facebook />
        </Col>

        <Col xs={1} className="twitter">
          <Twitter />
        </Col>

        <Col xs={1} className="instagram">
          <Instagram />
        </Col>

        <Col xs={1} className="linkedin">
          <Linkedin />
        </Col>

        <Col xs={1} className="youtube">
          <Youtube />
        </Col>
      </Row>
    </Container>
  );
};

export default TopNavBar;
