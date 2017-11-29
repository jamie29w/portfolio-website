import React from "react";
import HomeComponent from "./home/Component";
import PortfolioComponent from "./portfolio/Component";
import SnapCRMComponent from "./snap-crm/Component";
import NativeWeatherComponent from "./native-weather/Component";
import { Route, Switch } from "react-router-dom";

function BodyComponent(props) {
    const divStyles = {
        alignContent: "center",
        width: "80%",
        marginLeft: "10%",
        marginRight: "10%",
        textAlign: "center",
        flex: "1",
        flexDirection: "row"
    };

    return (
        <h2>
            <div style={divStyles}>
                <div>
                    <Switch>
                        <Route exact path="/" component={HomeComponent} />
                        <Route
                            path="/Portfolio"
                            component={PortfolioComponent}
                        />
                        <Route path="/snap-crm" component={SnapCRMComponent} />
                        <Route
                            path="/nativeweather"
                            component={NativeWeatherComponent}
                        />
                    </Switch>
                </div>
            </div>
        </h2>
    );
}

export default BodyComponent;
