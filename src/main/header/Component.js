import React from "react";
import backgroundUrl from "../../assets/marina-sparks.jpg";

function HeaderComponent(props) {
    const divStyles = {
        background: `url(${backgroundUrl}) no-repeat center center`,
        backgroundSize: "cover",
        WebkitBackgroundSize: "cover",
        MozBackgroundSize: "cover",
        OBackgroundSize: "cover",
        width: "100%",
        minWidth: "375px",
        height: "75vh",
        postion: "relative",
        fontFamily: "'Lato', sans-serif",
        color: "#DCDCDC",
        zIndex: "50",
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "flex-end"
    };

    const textContainer = {
        padding: "4% 8%",
        textAlign: "right"
    };

    const headText = {
        fontSize: "4.5em",
        marginBottom: "10px",
        fontWeight: "100"
    };
    const subHeadText = {
        fontSize: "2.5em",
        marginTop: "10px",
        fontWeight: "100"
    };
    return (
        <div style={divStyles}>
            <div style={textContainer}>
                <h1 style={headText}>Jamie Woodmancy</h1>
                <h2 style={subHeadText}>Web & App Developer</h2>
            </div>
        </div>
    );
}

export default HeaderComponent;
