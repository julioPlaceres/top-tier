import "./Hero-Section.css";
import Img1 from "../images/TopTier_img1.jpg";
import Image from "react-bootstrap/Image";
import logo from "../images/LogoImg.jpg";

// Show Images from different services provided and display brief information about it in the caption

const HeroSection = () => {
  return (
    <div className="main-img">
      {/* Image it's only being use as a placeholder, the actual image is set on the background */}
      <Image fluid src={Img1} alt="First slide" className="main-img-holder" />
    </div>
  );
};

export default HeroSection;
