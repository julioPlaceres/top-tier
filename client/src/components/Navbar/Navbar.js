import logo from "./LogoImg.jpg";
import Navigation from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (

    <Navigation expanded="true" fixed="top" expand="md">
<Container>
        <Nav.Item>
            <Nav.Link as ={Link} to="/About">About</Nav.Link>
        
   {/* <img src={logo} width="500" height="500"></img> */}
     </Nav.Item>
     </Container>
    </Navigation>




  );
};


export default Navbar;



//Need to add links for home services reviews & about contact
