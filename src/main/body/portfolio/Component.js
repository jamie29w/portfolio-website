import React from "react";
import snapCrmUrl from "../../../assets/snap-crm-main.png";
import nativeWeatherUrl from "../../../assets/native-weather-today.png";
import { Link } from "react-router-dom";

export default function PortfolioComponent() {
    const styles = {
        headText: {
            color: "rgba(42, 46, 55. .7)",
            fontSize: ".9em",
            fontFamily: "'Lato', sans-serif",
            fontWeight: "300"
        },
        portfolioView: {
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
        }
    };

    return (
        <div>
            <h3 style={styles.headText}>Recent projects:</h3>
            <div style={styles.portfolioView}>
                <div className="containerStyles">
                    <Link to="/snap-crm">
                        <img
                            src={snapCrmUrl}
                            className="imageStyles, imageLinkStyles"
                            alt="Screenshot of Snap CRM, built with React, NodeJS, and MongoDB. Click here to see the repo on Github."
                        />
                    </Link>
                </div>
                <div className="containerStyles">
                    <Link to="/nativeweather">
                        <img
                            src={nativeWeatherUrl}
                            className="imageStyles, imageLinkStyles"
                            alt="Screenshot of Native-Weather app, built with React Native. Click here to see the repo on Github."
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
