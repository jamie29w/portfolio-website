import React from "react";
import nativeWeatherForecast from "../../../assets/native-weather-forecast.png";
import nativeWeatherLogin from "../../../assets/native-weather-login.png";
import nativeWeatherToday from "../../../assets/native-weather-today.png";

export default function NativeWeatherComponent() {
    const styles = {
        headText: {
            flexWrap: "no-wrap",
            fontFamily: "'Lato', sans-serif",
            fontSize: ".7em",
            fontWeight: "300",
            margin: "15px 15px",
            minWidth: "175px",
            textAlign: "center"
        },
        nativeWeatherView: {
            alignContent: "center",
            alignItems: "justify",
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
        <div style={styles.nativeWeatherView}>
        <h2 style={styles.headText}>
                See the code at my{" "}
                <a
                    className="blueLinks"
                    href="https://github.com/vschool-september-2017/native-weather"
                    rel="noopener noreferrer"
                    target="_blank">
                    Github repo
                </a>
                .
            </h2>
            <div className="nativeWeatherRowStyles">
                <img
                    alt="Screenshot of Native-Weather app Today's Weather"
                    className="imageStyles"
                    src={nativeWeatherToday}
                />
                <h2 style={styles.headText}>
                    Native Weather was my first foray into mobile programming,
                    pair programming, and multi-user version control.
                </h2>
            </div>

            <div className="nativeWeatherRowStyles">
                <img
                    alt="Screenshot of Native-Weather app Weather Forecast"
                    className="imageStyles"
                    src={nativeWeatherForecast}
                />
                <h2 style={styles.headText}>
                    We queried the{" "}
                    <a className="blueLinks" href="https://darksky.net">
                        Dark Sky API
                    </a>{" "}
                    to provide current, daily, and weekly weather data based on
                    the geolocation of the device.
                </h2>
            </div>
            <div className="nativeWeatherRowStyles">
                <img
                    alt="Screenshot of Native-Weather app Login Screen"
                    className="imageStyles"
                    src={nativeWeatherLogin}
                />
                <h2 style={styles.headText}>
                    And just because we could, we incorporated user
                    authentication. Your weather is your business and yours
                    alone.
                </h2>
            </div>
        </div>
    );
}
