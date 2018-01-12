import React from "react";
const pdf = "jamie-woodmancy-resume-2017.pdf";

function FooterComponent(props) {
    const styles = {
        container: {
            alignItems: "center",
            backgroundColor: "rgba(42, 46, 55, .7)",
            bottom: "-15px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            fontSize: "14px",
            justifyContent: "space-around",
            padding: "15px",
            position: "relative",
            textAlign: "center",
            width: "100%"
        }
    };

    return (
        <div style={styles.container}>
            <span className="a">
                <a
                    className="links"
                    href="https://github.com/jamie29w"
                    rel="noopener noreferrer"
                    target="_blank">
                    <i aria-hidden="true" className="fa fa-github fa-lg" />
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
                    className="links"
                    href={pdf}
                    rel="noopener noreferrer"
                    target="_blank">
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
                    className="links"
                    href="https://www.linkedin.com/in/jamiewoodmancy/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <i
                        aria-hidden="true"
                        className="fa fa-linkedin-square fa-lg"
                    />
                </a>
            </span>
        </div>
    );
}

export default FooterComponent;
