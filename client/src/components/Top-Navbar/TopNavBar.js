import EmailIcon from "../Link-Icons/Email";
import PhoneIcon from "../Link-Icons/Phone";
import Facebook from "../Link-Icons/Facebook";
import Twitter from "../Link-Icons/Twitter";
import Instagram from "../Link-Icons/Instagram";
import Linkedin from "../Link-Icons/Linkedin";
import Youtube from "../Link-Icons/Youtube";

// TODO: Add proper formatting, consider using containers instead of div (Just a thought)

const TopNavBar = () => {
  return (
    <div class="container">
      <div className="">
        <EmailIcon />
        <PhoneIcon />
      </div>

      <div className="">
        <Facebook />
        <Twitter />
        <Instagram />
        <Linkedin />
        <Youtube />
      </div>
    </div>
  );
};

export default TopNavBar;
