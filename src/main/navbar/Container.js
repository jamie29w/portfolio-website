import React from "react";
// import NavbarComponent from "./Component";
import HamburgerMenu from "./views/HamburgerMenu";
import WideNavView from "./views/WideNavView";

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHamNav: true
    };

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  handleResize() {
    let showHamNav = window.innerWidth < 480 ? true : false;
    this.setState({ showHamNav });
  }

  render() {
    const NavView = this.state.showHamNav ? HamburgerMenu : WideNavView;
    return <NavView />;
  }
}

export default NavbarContainer;
