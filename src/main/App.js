import React from "react";
import HeaderComponent from "./header/Component";
import BodyComponent from "./body/Component";
import FooterComponent from "./footer/Component";
import NavbarContainer from "./navbar/Container";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isHome: true
        };

        this.handleHome = this.handleHome.bind(this);
        this.handleNotHome = this.handleNotHome.bind(this);
    }

    handleHome() {
        this.setState({
            isHome: true
        });
    }

    handleNotHome() {
        this.setState({
            isHome: false
        });
    }

    render() {
        return (
            <div>
                <NavbarContainer
                    handleHome={this.handleHome}
                    handleNotHome={this.handleNotHome}
                />
                <HeaderComponent isHome={this.state.isHome} />
                <BodyComponent />
                <FooterComponent />
            </div>
        );
    }
}

export default App;
