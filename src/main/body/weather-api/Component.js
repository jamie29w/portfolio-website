import React from "react"
import weatherAPIMainImg from "../../../assets/weather-api-main.png"
import weatherAPIForecast from "../../../assets/weather-api-forecast.png"
import weatherApiAppMobileHome from "../../../assets/weather-api-app-mobile-home.png"
import weatherApiAppMobileQuery1 from "../../../assets/weather-api-app-mobile-query1.png"
import weatherApiAppMobileQuery2 from "../../../assets/weather-api-app-mobile-query2.png"
import weatherApiAppMobileQuery3 from "../../../assets/weather-api-app-mobile-query3.png"


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
            <h2 style={styles.headText}>
                Responsively designed to work from mobile to monitor.
            </h2>
            <div style={styles.mobileImageStyles}>
                <div style={styles.mobileImageStyles}>
                    <img
                        alt="Screenshot of Snap CRM Add/Edit Modal"
                        className="imageStyles"
                        src={weatherApiAppMobileHome}
                    />
                    <img
                        alt="Screenshot of Snap CRM Add/Edit Modal"
                        className="imageStyles"
                        src={weatherApiAppMobileQuery1}
                    />
                </div>
                <div style={styles.mobileImageStyles}>
                    <img
                        alt="Screenshot of Snap CRM Add/Edit Modal"
                        className="imageStyles"
                        src={weatherApiAppMobileQuery2}
                    />
                    <img
                        alt="Screenshot of Snap CRM Add/Edit Modal"
                        className="imageStyles"
                        src={weatherApiAppMobileQuery3}
                    />
                </div>
            </div>
        </div>
    );
}
