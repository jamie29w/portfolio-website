import React from "react"
import weatherAPIAppDesktopMain from "../../../assets/weather-api-app-desktop-main.png"
import weatherAPIDesktopForecast from "../../../assets/weather-api-app-desktop-forecast.png"
import weatherAPIAppMobileMain from "../../../assets/weather-api-app-mobile-main.png"
import weatherAPIAppMobileCurrent from "../../../assets/weather-api-app-mobile-current.png"
import weatherAPIAppMobileForecast1 from "../../../assets/weather-api-app-mobile-forecast1.png"
import weatherAPIAppMobileForecast2 from "../../../assets/weather-api-app-mobile-forecast2.png"


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
        },
        mobileImageStyles: {
            display: 'flex',
            flexFlow: 'row wrap',justifyContent: 'space-around'
        }
    };

    return (
        <div style={styles.weatherAPIView}>
            <h2 style={styles.headText}>
                Demo it{" "}
                <a
                    className="blueLinks"
                    href="http://weather-api-app.jamiew.io/"
                    target="_blank"
                    rel="noopener noreferrer">
                    here
                </a>
                .
            </h2>
            <h2 style={styles.headText}>
                Check the code at my{" "}
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
                src={weatherAPIAppDesktopMain}
            />
            <h2 style={styles.headText}>
                Enter a location however you want, and get the current weather and 8-day forecast.
            </h2>
            <img
                alt="Screenshot of Snap CRM Add/Edit Modal"
                className="imageStyles"
                src={weatherAPIDesktopForecast}
            />
            <h2 style={styles.headText}>
                Responsively designed to work from mobile to monitor.
            </h2>
            <div style={styles.mobileImageStyles}>
                <div style={styles.mobileImageStyles}>
                    <img
                        alt="Screenshot of Snap CRM Add/Edit Modal"
                        className="imageStyles"
                        src={weatherAPIAppMobileMain}
                    />
                    <img
                        alt="Screenshot of Snap CRM Add/Edit Modal"
                        className="imageStyles"
                        src={weatherAPIAppMobileCurrent}
                    />
                </div>
                <div style={styles.mobileImageStyles}>
                    <img
                        alt="Screenshot of Snap CRM Add/Edit Modal"
                        className="imageStyles"
                        src={weatherAPIAppMobileForecast1}
                    />
                    <img
                        alt="Screenshot of Snap CRM Add/Edit Modal"
                        className="imageStyles"
                        src={weatherAPIAppMobileForecast2}
                    />
                </div>
            </div>
        </div>
    );
}
