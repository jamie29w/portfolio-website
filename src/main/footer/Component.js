import React from "react";
const pdf = "jamie-woodmancy-resume-2017.pdf";

function FooterComponent(props) {
    const styles = {
        container: {
            backgroundColor: "rgba(42, 46, 55, .7)",
            width: "100%",
            padding: "15px",
            position: "relative",
            bottom: "-15px",
            fontSize: "14px",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-around"
        }
    };

    return (
        <div style={styles.container}>
            <span className="a">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="links"
                    href="https://github.com/jamie29w">
                    <i className="fa fa-github fa-lg" aria-hidden="true" />
                </a>
            </span>

            <span className="b">
                <a
                    className="links"
                    href="mailto:jamieWDev@gmail.com?Subject=Programming%20Inquiry">
                    jamieWDev@gmail.com
                </a>
            </span>
            <span className="c">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="links"
                    href={pdf}>
                    View My Resume
                </a>
            </span>
            <span className="d">
                <a className="links" href="tel:775-360-0360">
                    775 360 0360
                </a>
            </span>
            <span className="e">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="links"
                    href="https://www.linkedin.com/in/jamiewoodmancy/">
                    <i
                        className="fa fa-linkedin-square fa-lg"
                        aria-hidden="true"
                    />
                </a>
            </span>
        </div>
    );
}

export default FooterComponent;
