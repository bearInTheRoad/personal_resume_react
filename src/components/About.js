// Create your About component here

import IMG from "../assets/Detective.png";

const About = () => {
  return (
    <div id="about" className="about">
      <h1 className="about-heading">About Me</h1>
      <div className="about-info">
        <p className="about-desc">
          A fast learner and a believer in lifelong learning. Equipped with
          study experience in various regions and working experience with
          multinational teams. Enthusiastic and experienced in data management
          and project management, including managing tech products like data
          lakes, data warehouses, and master data management systems. Determined
          to be an excellent data professional.
        </p>

        <div className="about-img">
          <div className="about-img-wrapper">
            <img src={IMG} alt="Detective"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
