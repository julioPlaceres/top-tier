import { MdEmail } from "react-icons/md";
import "./Link-Icons.css";
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
