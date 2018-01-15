import React from "react";
import { Link } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
const pdf = "jamie-woodmancy-resume-2018.pdf";

function Navbar(props) {
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
        },
        hideMenu: {
            display: "none"
        }
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

                <Link onClick={props.handleHome} to="/" className="links">
                    Home
                </Link>

                <span className="links">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="links"
                        href={pdf}>
                        Contact & Resume
                    </a>
                </span>

                <Link
                    onClick={props.handleNotHome}
                    to="/portfolio"
                    className="links">
                    Portfolio
                </Link>

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
            <div style={props.showNav ? styles.hideMenu : styles.flexContainer}>
                <span className="iconLinks">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="iconLinks"
                        href="https://github.com/jamie29w">
                        <i className="fa fa-github fa-lg" aria-hidden="true" />
                    </a>
                </span>

                <Link to="/" className="links" onClick={props.handleHome}>
                    Home
                </Link>

                <span className="links">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="links"
                        href={pdf}>
                        Contact & Resume
                    </a>
                </span>

                <Link
                    to="/portfolio"
                    className="links"
                    onClick={props.handleNotHome}>
                    Portfolio
                </Link>

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
