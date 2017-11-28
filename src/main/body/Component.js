import React from "react";
import { Grid, Row } from "react-bootstrap";
import HomeComponent from "./home/Component";
import PortfolioComponent from "./portfolio/Component";
import SkillsComponent from "./skills/Component";
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
        <div style={divStyles}>
            <div>
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route path="/Portfolio" component={PortfolioComponent} />
                </Switch>
            </div>
            <div>
                <SkillsComponent />
            </div>
        </div>
    );
}

export default BodyComponent;
