import React from "react";
import HeaderComponent from "./header/Component";
import BodyContainer from "./body/Container";
// import SkillsComponent from "./skills/Component";
import FooterComponent from "./footer/Component";
import NavbarContainer from "./navbar/Container";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeRef: {},
            portfolioRef: {}
        };
    }
    render() {
        return (
            <div>
                <NavbarContainer />
                <HeaderComponent />
                <BodyContainer />
                <FooterComponent />
            </div>
        );
    }
}

export default App;
