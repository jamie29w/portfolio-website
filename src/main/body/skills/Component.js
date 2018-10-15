import React from "react";
import bootstrapIcon from "../../../assets/bootstrap-stack.png";
import css3Icon from "../../../assets/css3-512.png";
import html5Icon from "../../../assets/html5-512.png";
import jsIcon from "../../../assets/js-icon-transparent.png";
import nodeJsIcon from "../../../assets/nodejs-transparent.png";
import reactIcon from "../../../assets/react-logo-1000-transparent.png";
import reduxIcon from "../../../assets/redux-logo.png";

function SkillsComponent() {
  //spread squareIconProps styling over all icon and add custom height & width if needed
  const squareIconProps = {
    backgroundSize: "cover",
    height: "112px",
    width: "112px"
  };
  const styles = {
    boostrapIcon: {
      background: `url(${bootstrapIcon}) no-repeat center center`,
      ...squareIconProps
    },
    container: {
      marginTop: 20
    },
    css3Icon: {
      background: `url(${css3Icon}) no-repeat center center`,
      ...squareIconProps
    },
    headText: {
      color: "rgba(42, 46, 55. .7)",
      fontFamily: "'Lato', sans-serif",
      fontSize: ".9em",
      fontWeight: "500"
    },
    iconContainer: {
      alignItems: "center",
      backgroundColor: "#f6f4f5",
      color: "#2A2E37",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      marginTop: "20px",
      marginBottom: "20px",
      textAlign: "center",
      width: "100%"
    },
    html5Icon: {
      background: `url(${html5Icon}) no-repeat center center`,
      ...squareIconProps,
      height: "100px",
      width: "100px"
    },
    jsIcon: {
      background: `url(${jsIcon}) no-repeat center center`,
      ...squareIconProps
    },
    nodeJsIcon: {
      background: `url(${nodeJsIcon}) no-repeat center center`,
      ...squareIconProps,
      height: "100px",
      width: "164px"
    },
    reactIcon: {
      background: `url(${reactIcon}) no-repeat center center`,
      ...squareIconProps
    },
    reduxIcon: {
      background: `url(${reduxIcon}) no-repeat center center`,
      ...squareIconProps,
      height: "95px",
      width: "105px"
    }
  };

  return (
    <div style={styles.container}>
      <div>
        <h3 style={styles.headText}>Versed in:</h3>
      </div>
      <div style={styles.iconContainer}>
        <i style={styles.reactIcon} />
        <i style={styles.reduxIcon} />
        <i style={styles.html5Icon} />
        <i style={styles.css3Icon} />
        <i style={styles.boostrapIcon} />
        <i style={styles.jsIcon} />
        <i style={styles.nodeJsIcon} />
      </div>
    </div>
  );
}

export default SkillsComponent;
