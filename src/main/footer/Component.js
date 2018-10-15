import React from "react";
const resumeZip = "jamie-woodmancy-resume.zip";

function FooterComponent(props) {
  const styles = {
    container: {
      alignItems: "center",
      backgroundColor: "rgba(42, 46, 55, .7)",
      bottom: "-15px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      fontSize: "14px",
      justifyContent: "space-around",
      padding: "15px",
      position: "relative",
      textAlign: "center",
      width: "100%"
    }
  };

  return (
    <div style={styles.container}>
      <a
        className="a links"
        href="https://github.com/jamie29w"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i aria-hidden="true" className="fa fa-github fa-lg" />
      </a>

      <a
        className="b links"
        href="mailto:jamieWDev@gmail.com?Subject=Let's%20Build%20Something%20Together..."
      >
        jamieWDev@gmail.com
      </a>

      <a className="c links" href={resumeZip}>
        Download My Resume
      </a>

      <a className="d links" href="tel:775-360-0360">
        775 360 0360
      </a>

      <a
        className="e links"
        href="https://www.linkedin.com/in/jamiewoodmancy/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i aria-hidden="true" className="fa fa-linkedin-square fa-lg" />
      </a>
    </div>
  );
}

export default FooterComponent;
