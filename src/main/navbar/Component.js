import React from "react";
import { Link } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
const pdf = "jamie-woodmancy-resume-2017.pdf";

function Navbar(props) {
    const styles = {
        flexContainer: {
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
