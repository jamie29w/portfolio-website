import React from "react";
import BodyComponent from "./body/Component";
import FooterComponent from "./footer/Component";
import HeaderComponent from "./header/Component";
import NavbarContainer from "./navbar/Container";

class App extends React.Component {
    constructor() {
        super();
        //isHome indicates if the user is at the Home View and passes down state
        //so the header background image is resized accordingly
        this.state = {
            isHome: true
        };

        this.handleHome = this.handleHome.bind(this);
        this.handleNotHome = this.handleNotHome.bind(this);
    }
    //updates isHome, making header background image taller
    handleHome() {
        this.setState({
            isHome: true
        });
    }
    //updates isHome, making header background image smaller
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
