// Create your Header component here

const NavBar = () => {
  return (
    <div className="header-container">
      <div className="nav-item">
        <a href="#about">About</a>
      </div>
      <div className="nav-item">
        <a href="#projects">Projects</a>
      </div>
      <div className="nav-item">
        <a href="#skills">Skills</a>
      </div>
    </div>
  );
};

const header = () => {
  const userName = "Dylan Luo aka. BearInTheRoad";

  return (
    <div className="header">
      <div className="header-logo">
        <a href="#app">
          <h3 className="header-name"> {userName} </h3>
        </a>
      </div>
      <NavBar />
    </div>
  );
};

export default header;
