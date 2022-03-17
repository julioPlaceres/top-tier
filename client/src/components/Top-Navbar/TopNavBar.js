import { Container, Col, Stack, Row } from "react-bootstrap";
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
    <Container className="bg-light">
      <Row>
      <Col md={3} className="email">
        <EmailIcon />
        </Col>
      
        <Col md={2} className="phone">
        <PhoneIcon  />
        </Col>

        <Col md={2}/>

        <Col xs="auto" className="facebook">
        <Facebook  />
        </Col>

        <Col xs="auto" className="twitter">
        <Twitter  />
        </Col>

        <Col xs="auto" className="instagram">
        <Instagram  />
        </Col>

        <Col xs="auto" className="linkedin">
        <Linkedin  />
        </Col>

        <Col xs="auto" className="youtube">
        <Youtube />
        </Col>
        </Row>
    </Container>
  );
};

export default TopNavBar;
