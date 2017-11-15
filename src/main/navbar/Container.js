import React from "react";
import NavbarComponent from "./Component";
import scrollToElement from "scroll-to-element";

class NavbarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    openModal() {
        this.setState({ showModal: true });
    }

    handleScroll(id, offNum) {
        // scrollToElement(id, { offset: offNum });
    }

    render() {
        return (
            <NavbarComponent
                closeModal={this.closeModal}
                openModal={this.openModal}
                modalShow={this.state.showModal}
                handleScroll={this.handleScroll}
            />
        );
    }
}

export default NavbarContainer;
