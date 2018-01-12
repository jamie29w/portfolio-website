import React from "react";
import NavbarComponent from "./Component";

class NavbarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNav: true
        };

        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
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

    render() {
        return (
            <NavbarComponent
                handleHome={this.props.handleHome}
                handleNotHome={this.props.handleNotHome}
                showNav={this.state.showNav}
            />
        );
    }
}

export default NavbarContainer;
