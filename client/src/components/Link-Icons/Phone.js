import { AiFillPhone } from "react-icons/ai";
import "./Link-Icons.css";

const Phone = () => {
  return (
    <a href="tel:+1 (309) 533-9965" className="gap-3 link-icons">
      <AiFillPhone />
      <small className="m-2 small-font">+1 (309) 533-9965</small>
    </a>
  );
};

export default Phone;
