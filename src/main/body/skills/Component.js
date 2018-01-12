import React from "react";

import reactIcon from "../../../assets/react-logo-1000-transparent.png";
import reduxIcon from "../../../assets/redux-logo.png";
import html5Icon from "../../../assets/html5-512.png";
import css3Icon from "../../../assets/css3-512.png";
import bootstrapIcon from "../../../assets/bootstrap-stack.png";
import jsIcon from "../../../assets/js-icon-transparent.png";
import nodeJsIcon from "../../../assets/nodejs-transparent.png";

function SkillsComponent() {
    const styles = {
        boostrapIcon: {
            background: `url(${bootstrapIcon}) no-repeat center center`,
            backgroundSize: "cover",
            height: "112px",
            width: "112px"
        },
        container: {
            width: "100%",
            backgroundColor: "#f6f4f5",
            color: "#2A2E37",
            marginTop: "20px",
            marginBottom: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-around"
        },
        css3Icon: {
            background: `url(${css3Icon}) no-repeat center center`,
            backgroundSize: "cover",
            height: "112px",
            width: "112px"
        },
        headText: {
            color: "rgba(42, 46, 55. .7)",
            fontSize: ".9em",
            fontFamily: "'Lato', sans-serif",
            fontWeight: "300"
        },
        html5Icon: {
            background: `url(${html5Icon}) no-repeat center center`,
            backgroundSize: "cover",
            height: "100px",
            width: "100px"
        },
        jsIcon: {
            background: `url(${jsIcon}) no-repeat center center`,
            backgroundSize: "cover",
            height: "112px",
            width: "112px"
        },
        nodeJsIcon: {
            background: `url(${nodeJsIcon}) no-repeat center center`,
            backgroundSize: "cover",
            height: "100px",
            width: "164px"
        },
        reactIcon: {
            background: `url(${reactIcon}) no-repeat center center`,
            backgroundSize: "cover",
            height: "112px",
            width: "112px"
        },
        reduxIcon: {
            background: `url(${reduxIcon}) no-repeat center center`,
            backgroundSize: "cover",
            height: "95px",
            width: "105px"
        }
    };

    return (
        <div>
            <div>
                <h3 style={styles.headText}>Versed in:</h3>
            </div>
            <div style={styles.container}>
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
