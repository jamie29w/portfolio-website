import React from "react";
import { Link } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
const pdf = "jamie-woodmancy-resume-2017.pdf";

function Navbar(props) {
    const flexContainerStyles = {
        width: "100%",
        position: "fixed",
        backgroundColor: "rgba(39, 58, 100, .9)",
        height: "6vh",
        minHeight: "35px",
        fontFamily: "'Lato', sans-serif",
        display: "flex",
        showNavection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "space-around",
        zIndex: "100"
    };

    const hideMenu = {
        display: "none"
    };

    return (
        <div>
            <Menu isOpen={false} width={175}>
                <span className="iconLinks">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="iconLinks"
                        href="https://github.com/jamie29w">
                        <i className="fa fa-github fa-lg" aria-hidden="true" />
                    </a>
                </span>

                <Link to="/" className="links">
                    Home
                </Link>

                <Link to="/portfolio" className="links">
                    Portfolio
                </Link>

                <span className="links">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="links"
                        href={pdf}>
                        Resume
                    </a>
                </span>

                <span className="iconLinks">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="iconLinks"
                        href="https://www.linkedin.com/in/jamiewoodmancy/">
                        <i
                            className="fa fa-linkedin-square fa-lg"
                            aria-hidden="true"
                        />
                    </a>
                </span>
            </Menu>
            <div style={props.showNav ? hideMenu : flexContainerStyles}>
                <span className="iconLinks">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="iconLinks"
                        href="https://github.com/jamie29w">
                        <i className="fa fa-github fa-lg" aria-hidden="true" />
                    </a>
                </span>

                <Link to="/" className="links">
                    Home
                </Link>

                <Link to="/portfolio" className="links">
                    Portfolio
                </Link>

                <span className="links">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="links"
                        href={pdf}>
                        Resume
                    </a>
                </span>

                <span className="iconLinks">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="iconLinks"
                        href="https://www.linkedin.com/in/jamiewoodmancy/">
                        <i
                            className="fa fa-linkedin-square fa-lg"
                            aria-hidden="true"
                        />
                    </a>
                </span>
            </div>
        </div>
    );
}

export default Navbar;
