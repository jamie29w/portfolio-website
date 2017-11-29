import React from "react";

export default function NativeWeatherComponent() {
    const nativeWeatherViewStyles = {
        alignContent: "center",
        width: "80%",
        marginLeft: "10%",
        marginRight: "10%",
        textAlign: "center",
        flex: "1",
        flexDirection: "row"
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
        <div style={nativeWeatherViewStyles}>
            <h2 style={headTextStyles}>
                Native Weather is my first venture into mobile coding...
            </h2>

            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/vschool-september-2017/native-weather">
                Link
            </a>
        </div>
    );
}
