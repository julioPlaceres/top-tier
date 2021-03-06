import "./Link-Icons.css";
import { MdEmail } from "react-icons/md";

const Email = () => {
  return (
    <a
      href="mailto:toptiercabinetsrefinishing@gmail.com"
      className="gap-3 link-icons"
    >
      <MdEmail />
      <small className="small-font m-1">
        toptiercabinetsrefinishing@gmail.com
      </small>
    </a>
  );
};

export default Email;
