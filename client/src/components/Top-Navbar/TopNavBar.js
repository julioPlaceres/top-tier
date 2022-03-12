import { AiFillPhone } from "react-icons/ai";

const TopNavBar = () => {
  return (
    <div class="container">
      <div class="">
        <div class="">
          <small>
            <AiFillPhone />
            <span class="">
              <a href="tel:+1 (309) 533-9965"> +1 (309) 533-9965 </a>
            </span>

            <i class="bi bi-envelope"></i>
            <span>
              <a href="mailto:info@yourcompany.example.com">
                {" "}
                info@yourcompany.example.com
              </a>
            </span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
