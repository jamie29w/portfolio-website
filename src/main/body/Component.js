import React from "react";
import HomeComponent from "./home/Component";
import PortfolioComponent from "./portfolio/Component";
import SnapCRMComponent from "./snap-crm/Component";
import NativeWeatherComponent from "./native-weather/Component";
import { Route, Switch } from "react-router-dom";

function BodyComponent(props) {
    const styles = {
        divStyles: {
            alignContent: "center",
            flex: "1",
            flexDirection: "row",
            marginLeft: "10%",
            marginRight: "10%",
            textAlign: "center",
            width: "80%"
        }
    };

    return (
        <h2>
            <div style={styles.divStyles}>
                <div>
                    <Switch>
                        <Route
                            exact
                            component={PortfolioComponent}
                            path="/portfolio"
                        />
                        <Route
                            exact
                            component={SnapCRMComponent}
                            path="/snap-crm"
                        />
                        <Route
                            exact
                            component={NativeWeatherComponent}
                            path="/nativeweather"
                        />
                        <Route component={HomeComponent} path="/" />
                    </Switch>
                </div>
            </div>
        </h2>
    );
}

export default BodyComponent;
