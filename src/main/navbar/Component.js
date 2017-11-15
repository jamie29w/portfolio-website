import React from "react";
import { Modal, OverlayTrigger, Button } from "react-bootstrap";
import scrollToElement from "scroll-to-element";
// import { scrollToComponent } from "react-scroll-to-component";

function Navbar(props) {
    const flexContainerStyles = {
        width: "100%",
        position: "fixed",
        backgroundColor: "rgba(39, 58, 100, .9)",
        height: "5vh",
        fontFamily: "'Lato', sans-serif",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "space-around",
        zIndex: "100"
    };

    return (
        <div style={flexContainerStyles}>
            <a className="links" onClick={props.openModal}>
                Home
            </a>
            <a className="links" onClick={props.openModal}>
                Portfolio
            </a>
            <a className="links" onClick={props.openModal}>
                About Me
            </a>
            <a
                className="links"
                id="contactLink"
                onClick={() => {
                    scrollToElement("#contactLink", {
                        ease: "inOutBack",
                        offset: 1500,
                        duration: 2000
                    });
                }}>
                Contact
            </a>

            <Modal show={props.modalShow} onHide={props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>This section is in production</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ fontWeight: "300" }}>
                        Please enjoy the rest of my website in the meanwhile.
                    </p>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Navbar;
