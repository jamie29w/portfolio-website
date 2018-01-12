import React from "react";
import nativeWeatherToday from "../../../assets/native-weather-today.png";
import nativeWeatherForecast from "../../../assets/native-weather-forecast.png";
import nativeWeatherLogin from "../../../assets/native-weather-login.png";

export default function NativeWeatherComponent() {
    const styles = {
        headText: {
            fontFamily: "'Lato', sans-serif",
            fontWeight: "300",
            fontSize: ".7em",
            margin: "15px 15px",
            textAlign: "left",
            minWidth: "175px",
            flexWrap: "no-wrap"
        },
        nativeWeatherView: {
            alignContent: "center",
            width: "100%",
            textAlign: "center",
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            flexWrap: "wrap",
            alignItems: "justify"
        }
    };

    return (
        <div style={styles.nativeWeatherView}>
            <div className="nativeWeatherRowStyles">
                <img className="imageStyles" src={nativeWeatherToday} alt="" />
                <h2 style={styles.headText}>
                    Native Weather was my first foray into mobile programming,
                    pair programming, and multi-user version control.
                </h2>
            </div>

            <div className="nativeWeatherRowStyles">
                <img
                    className="imageStyles"
                    src={nativeWeatherForecast}
                    alt=""
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
                <img className="imageStyles" src={nativeWeatherLogin} alt="" />
                <h2 style={styles.headText}>
                    And just because we could, we incorporated user
                    authentication. Your weather is your business and yours
                    alone.
                </h2>
            </div>

            <h2 style={styles.headText}>
                See the code at my{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/vschool-september-2017/native-weather"
                    className="blueLinks">
                    Github repo
                </a>
                .
            </h2>
        </div>
    );
}
