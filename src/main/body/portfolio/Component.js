import React from "react";
import { Col } from "react-bootstrap";

export default function PortfolioComponent() {
    const colStyles = {
        backgroundColor: "rgba(42, 46, 55, .7)",
        color: "#DCDCDC",
        marginTop: "20px",
        marginBottom: "25px",
        borderRadius: "10px",
        padding: "20px"
    };

    const headTextStyles = {
        fontFamily: "'Lato', sans-serif",
        fontWeight: "100",
        fontStyle: "italic",
        fontSize: ".9em",
        marginTop: "25px",
        marginLeft: "25px",
        textAlign: "justify"
    };

    const bodyTextStyles = {
        fontFamily: "'Lato', sans-serif",
        fontSize: ".55em",
        fontWeight: "300",
        marginBottom: "20px",
        textAlign: "justify",
        lineHeight: "125%",
        marginLeft: "25px",
        marginRight: "25px",
        letterSpacing: "0px"
    };

    return (
        <div style={colStyles}>
            <h3 style={headTextStyles}>This section is in production.</h3>

            <h3 style={bodyTextStyles}>
                Please enjoy the rest of my website in the meanwhile.
            </h3>
        </div>
    );
}
