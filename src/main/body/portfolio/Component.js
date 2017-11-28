import React from "react";
import snapCrmUrl from "../../../assets/snap-crm-main.png";
import nativeWeatherUrl from "../../../assets/native-weather-today.png";

export default function PortfolioComponent() {
    const colStyles = {
        backgroundColor: "#f6f4f5",
        marginTop: "20px",
        marginBottom: "25px",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        alignItems: "center"
    };

    const headTextStyles = {
        color: "rgba(42, 46, 55. .7)",
        fontSize: ".9em",
        fontFamily: "'Lato', sans-serif",
        fontWeight: "300",
        fontStyle: "italic"
    };

    return (
        <div>
            <h3 style={headTextStyles}>My work:</h3>
            <div style={colStyles}>
                <div>
                    <img src={snapCrmUrl} className="imageStyles" alt="" />
                </div>
                <div className="containerStyles">
                    <img
                        src={nativeWeatherUrl}
                        className="imageStyles"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
