import React from "react";
import weatherAPIMainImg from "../../../assets/weather-api-main.png";
import weatherAPIForecast from "../../../assets/weather-api-forecast.png";

export default function WeatherAPI() {
    const styles = {
        headText: {
            fontFamily: "'Lato', sans-serif",
            fontSize: ".7em",
            fontWeight: "300",
            margin: "15px 15px",
            textAlign: "justify"
        },
        weatherAPIView: {
            alignContent: "center",
            alignItems: "center",
            display: "flex",
            flex: "1",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-around",
            textAlign: "center",
            width: "100%"
        }
    };

    return (
        <div style={styles.weatherAPIView}>
            {/* <h2 style={styles.headText}>
                Demo it{" "}
                <a
                    className="blueLinks"
                    href="http://snap-crm.jamiew.io/"
                    target="_blank"
                    rel="noopener noreferrer">
                    here
                </a>
                .
            </h2> */}
            <h2 style={styles.headText}>
                See the code at my{" "}
                <a
                    className="blueLinks"
                    href="https://github.com/jamie29w/weather-api-app"
                    rel="noopener noreferrer"
                    target="_blank">
                    Github repo
                </a>
                .
            </h2>
            <h2 style={styles.headText}>
                A straightforward React app that consumes the Google Places and Dark Sky APIs.
            </h2>
            <img
                alt="Screenshot of Snap CRM Home Screen"
                className="imageStyles"
                src={weatherAPIMainImg}
            />
            <h2 style={styles.headText}>
                Enter a location however you want, and get the current weather and 8-day forecast.
            </h2>
            <img
                alt="Screenshot of Snap CRM Add/Edit Modal"
                className="imageStyles"
                src={weatherAPIForecast}
            />
        </div>
    );
}
