// Create your Body component here

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from "../assets/Software.png";

const Body = () => {
  return (
    <div id="body" className="body">
      <div className="body-container">
        <div className="body-profile">
          <img className="body-img" alt="avatar" src={Avatar}></img>
        </div>
        <div className="body-headline">Dylan Luo</div>
        <div className="body-text">
          Full Stack Engineer and Data Professional
        </div>
        <div className="body-icons">
          <a href="/#" target="_blank" rel="noreferrer" className="icon-link">
            <FaGithub></FaGithub>
          </a>
          <a href="/#" target="_blank" rel="noreferrer" className="icon-link">
            <FaLinkedin></FaLinkedin>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;
