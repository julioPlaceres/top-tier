import "./Hero-Section.css";
import Image from "react-bootstrap/Image";
import Img1 from "./TopTier_img1.jpg";
import Img2 from "./TopTier_img2.jpg";
import Img3 from "./TopTier_img3.jpg";
import { Carousel } from "react-bootstrap";

// Show Images from different services provided and display brief information about it in the caption

const HeroSection = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Image fluid src={Img1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="img-caption-header">First slide label</h3>
          <p className="img-caption-p">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <Image fluid src={Img2} alt="Second slide" />
        <Carousel.Caption className="img-caption">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image fluid src={Img3} alt="Third slide" />
        <Carousel.Caption className="img-caption">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSection;
