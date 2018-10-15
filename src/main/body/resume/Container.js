import React, { Component } from "react";
import ResumeComponent from "./Component";
import resumeBody from "./resume-body.md";
import resumeHead from "./resume-head.md";

class ResumeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeBody: null,
      resumeHead: null
    };
  }

  componentWillMount() {
    fetch(resumeHead).then(res =>
      res.text().then(text => this.setState({ resumeHead: text }))
    );
    fetch(resumeBody).then(res =>
      res.text().then(text => this.setState({ resumeBody: text }))
    );
  }

  source = "#header\n\nparagraph";
  render() {
    console.log(typeof this.state.resume);
    return (
      <ResumeComponent
        source={this.source}
        resumeHead={this.state.resumeHead}
        resumeBody={this.state.resumeBody}
      />
    );
  }
}

export default ResumeContainer;
