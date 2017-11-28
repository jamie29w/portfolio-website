import React from "react";
import snapCrmUrl from "../../../assets/snap-crm-main.png";
import nativeWeatherUrl from "../../../assets/native-weather-today.png";

export default function PortfolioComponent() {
    const colStyles = {
        // backgroundColor: "rgba(42, 46, 55, .7)",
        backgroundColor: "#f6f4f5",
        color: "rgba(42, 46, 55, .7)",
        marginTop: "20px",
        marginBottom: "25px",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        alignContent: "center"
    };

    // const headTextStyles = {
    //     fontFamily: "'Lato', sans-serif",
    //     fontWeight: "300",
    //     fontStyle: "italic",
    //     fontSize: ".9em",
    //     marginTop: "25px",
    //     marginLeft: "25px",
    //     marginRight: "25px",
    //     textAlign: "center"
    // };

    // const bodyTextStyles = {
    //     ...headTextStyles,
    //     fontSize: ".55em",
    //     marginBottom: "20px",
    //     lineHeight: "125%"
    // };

    const link1Styles = {
        width: "500px",
        height: "300px",
        background: `url(${snapCrmUrl}) no-repeat center center`,
        backgroundSize: "cover",
        WebkitBackgroundSize: "cover",
        MozBackgroundSize: "cover",
        OBackgroundSize: "cover",
        marginTop: "10px",
        marginBottom: "10px",
        flex: "0 1 auto"
    };

    const link2Styles = {
        ...link1Styles,
        background: `url(${nativeWeatherUrl}) no-repeat center center`,
        height: "500px",
        width: "300px"
    };

    return (
        <div style={colStyles}>
            {/* <h3 style={headTextStyles}>This section is in production.</h3> */}

            <div style={link1Styles} />
            <div style={link2Styles} />
        </div>
    );
}
