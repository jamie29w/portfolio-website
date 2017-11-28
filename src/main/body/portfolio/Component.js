import React from "react";
import { Col } from "react-bootstrap";

export default function PortfolioComponent() {
    const colStyles = {
        backgroundColor: "rgba(42, 46, 55, .7)",
        color: "#DCDCDC",
        marginTop: "20px",
        marginBottom: "25px",
        borderRadius: "10px"
    };
    return (
        <Col style={colStyles} xs={10} xsOffset={1} sm={12} smOffset={0}>
            Hi from PortfolioComponent
        </Col>
    );
}
