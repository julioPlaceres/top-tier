import "./Card-Services.css";
import { Card, Button } from "react-bootstrap";

const CardServices = (props) => {
  return (
<Card border="light" 
style={{ width: "20rem", borderRadius: "45px"}} 
className="mx-auto card-wood"> 
    <Card.Img variant="top" 
    src={props.src} 
    alt="card image" 
    style={{maxWidth: "200px"}} 
    className="mx-auto rounded float-start"/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text> <small>{props.text}</small></Card.Text>
        <Button variant="primary">{props.btnText}</Button>
      </Card.Body>
</Card>
  );
};

export default CardServices;