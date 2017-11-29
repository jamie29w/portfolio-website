import React from "react";
import NavbarComponent from "./Component";

class NavbarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            showNav: true
        };

        this.handleResize = this.handleResize.bind(this);
    }

    handleResize() {
        let showNav = window.innerWidth < 480 ? true : false;
        this.setState(prevState => {
            return {
                ...prevState,
                showNav
            };
        });
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
    }

    render() {
        return <NavbarComponent showNav={this.state.showNav} />;
    }
}

export default NavbarContainer;
