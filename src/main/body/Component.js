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
            width: "80%",
            marginLeft: "10%",
            marginRight: "10%",
            textAlign: "center",
            flex: "1",
            flexDirection: "row"
        }
    };

    return (
        <h2>
            <div style={styles.divStyles}>
                <div>
                    <Switch>
                        <Route
                            exact
                            path="/portfolio"
                            component={PortfolioComponent}
                        />
                        <Route
                            exact
                            path="/snap-crm"
                            component={SnapCRMComponent}
                        />
                        <Route
                            exact
                            path="/nativeweather"
                            component={NativeWeatherComponent}
                        />
                        <Route path="/" component={HomeComponent} />
                    </Switch>
                </div>
            </div>
        </h2>
    );
}

export default BodyComponent;
