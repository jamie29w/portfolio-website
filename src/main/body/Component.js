import React from "react";
import { Grid, Row } from "react-bootstrap";
import HomeComponent from "./home/Component";
import PortfolioComponent from "./portfolio/Component";
import SkillsComponent from "./skills/Component";
import { Route, Switch } from "react-router-dom";

function BodyComponent(props) {
    const divStyles = {
        backgroundColor: "#F6F4F5",
        color: "#2C2C2A",
        width: "100%",
        textAlign: "center"
    };

    return (
        <div style={divStyles}>
            <Grid>
                <Row>
                    <Switch>
                        <Route exact path="/" component={HomeComponent} />
                        <Route
                            path="/Portfolio"
                            component={PortfolioComponent}
                        />
                    </Switch>
                </Row>
                <Row>
                    <SkillsComponent />
                </Row>
            </Grid>
        </div>
    );
}

export default BodyComponent;
