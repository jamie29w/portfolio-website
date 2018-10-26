import React from "react";
import { Link } from "react-router-dom";

function WideNavView(props) {
  const styles = {
    flexContainer: {
      alignItems: "center",
      backgroundColor: "rgba(39, 58, 100, .9)",
      display: "flex",
      fontFamily: "'Lato', sans-serif",
      flexWrap: "nowrap",
      height: "6vh",
      justifyContent: "space-around",
      minHeight: "35px",
      position: "fixed",
      showNavection: "row",
      width: "100%",
      zIndex: "100"
    }
  };

  return (
    <div style={styles.flexContainer}>
      <span className="iconLinks">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="iconLinks"
          href="https://github.com/jamie29w"
        >
          <i className="fa fa-github fa-lg" aria-hidden="true" />
        </a>
      </span>

      <Link to="/" className="links">
        Home
      </Link>

      <Link to="/resume" className="links">
        Resume
      </Link>

      <Link to="/portfolio" className="links">
        Portfolio
      </Link>

      <span className="iconLinks">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="iconLinks"
          href="https://www.linkedin.com/in/jamiewoodmancy/"
        >
          <i className="fa fa-linkedin-square fa-lg" aria-hidden="true" />
        </a>
      </span>
    </div>
  );
}

export default WideNavView;
