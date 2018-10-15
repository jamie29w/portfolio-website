import React from "react";
import { Link } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";

function HamburgerMenu(props) {
  return (
    <Menu isOpen={false} width={175}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="iconLinks"
        href="https://github.com/jamie29w"
      >
        <i className="fa fa-github fa-lg" aria-hidden="true" />
      </a>

      <Link onClick={props.handleHome} to="/" className="links">
        Home
      </Link>

      <Link to="/resume" className="links" onClick={props.handleNotHome}>
        Resume
      </Link>

      <Link onClick={props.handleNotHome} to="/portfolio" className="links">
        Portfolio
      </Link>

      <a
        target="_blank"
        rel="noopener noreferrer"
        className="iconLinks"
        href="https://www.linkedin.com/in/jamiewoodmancy/"
      >
        <i className="fa fa-linkedin-square fa-lg" aria-hidden="true" />
      </a>
    </Menu>
  );
}

export default HamburgerMenu;
