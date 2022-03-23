import "./Card-Services.css";
import { Card, Button } from "react-bootstrap";

const CardServices = (props) => {
  return (
<Card border="light" style={{ width: "20rem"}} className="mx-auto">
    <Card.Img variant="top" src={props.src} alt="card image" style={{maxWidth: "200px", backgroundColor: "brown"}} className="mx-auto"/>
      <Card.Body style={{backgroundColor: "brown"}}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text> <small>{props.text}</small></Card.Text>
        <Button variant="primary">{props.btnText}</Button>
      </Card.Body>
</Card>
  );
};

export default CardServices;