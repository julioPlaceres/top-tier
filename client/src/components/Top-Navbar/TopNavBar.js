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
    <Container fluid className="bg-light">
      <Stack direction="horizontal">
        <EmailIcon className="link-icons" />
        <PhoneIcon className="link-icons" />
        <Facebook className="link-icons" />
        <Twitter className="link-icons" />
        <Instagram className="link-icons" />
        <Linkedin className="link-icons" />
        <Youtube className="link-icons" />
      </Stack>
    </Container>
  );
};

export default TopNavBar;
