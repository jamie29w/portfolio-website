import React from "react";
import nativeWeatherUrl from "../../../assets/native-weather-today.png";
import snapCrmUrl from "../../../assets/snap-crm-main.png";
import weatherUrl from '../../../assets/weather-api-main.png'
import { Link } from "react-router-dom";

export default function PortfolioComponent() {
    const styles = {
        headText: {
            color: "rgba(42, 46, 55. .7)",
            fontFamily: "'Lato', sans-serif",
            fontSize: ".9em",
            fontWeight: "300",
            marginTop: "20px"
        },
        portfolioView: {
            alignItems: "center",
            backgroundColor: "#f6f4f5",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginTop: "20px",
            marginBottom: "25px"
        },
        subText: {
            color: "rgba(42, 46, 55. .7)",
            fontFamily: "'Lato', sans-serif",
            fontSize: ".7em",
            fontWeight: "300"
        }
    };

    return (
        <div>
            <h3 style={styles.headText}>
                Recent projects - Select either to see more:
            </h3>
            <div style={styles.portfolioView}>
                <div className="containerStyles">
                    <Link to="/snap-crm">
                        <img
                            src={snapCrmUrl}
                            className="imageStyles, imageLinkStyles"
                            alt="Screenshot of Snap CRM, built with React, NodeJS, and MongoDB."
                        />
                    </Link>
                </div>
                <div className="containerStyles">
                    <Link to="/nativeweather">
                        <img
                            src={nativeWeatherUrl}
                            className="imageStyles, imageLinkStyles"
                            alt="Screenshot of Native-Weather app, built with React Native."
                        />
                    </Link>
                </div>
                <div className="containerStyles">
                    <Link to="/weather-api">
                        <img
                            src={weatherUrl}
                            className="imageStyles, imageLinkStyles"
                            alt="Screenshot of Weather-API app, built with React and NodeJS."
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
