import React, { Component } from "react";
import ResumeComponent from "./Component";
import resume from "./resume.md";

class ResumeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: null
    };
  }

  componentWillMount() {
    fetch(resume).then(res =>
      res.text().then(text => this.setState({ resume: text }))
    );
  }

  source = "#header\n\nparagraph";
  render() {
    console.log(typeof this.state.resume);
    return <ResumeComponent source={this.source} resume={this.state.resume} />;
  }
}

export default ResumeContainer;
