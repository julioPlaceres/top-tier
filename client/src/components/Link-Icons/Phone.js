import { AiFillPhone } from "react-icons/ai";

const Phone = () => {
  return (
    <div className="container">
      <small>
        <AiFillPhone />
        <span>
          <a href="tel:+1 (309) 533-9965"> +1 (309) 533-9965</a>
        </span>
      </small>
    </div>
  );
};

export default Phone;
