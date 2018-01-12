import React from "react";
import backgroundUrl from "../../assets/marina-sparks.jpg";

function HeaderComponent(props) {
    const styles = {
        headText: {
            fontSize: "4.5em",
            marginBottom: "10px",
            fontWeight: "100"
        },
        subHeadText: {
            fontSize: "2.5em",
            marginTop: "10px",
            fontWeight: "100"
        },
        tall: {
            background: `url(${backgroundUrl}) no-repeat center center`,
            backgroundSize: "cover",
            WebkitBackgroundSize: "cover",
            MozBackgroundSize: "cover",
            OBackgroundSize: "cover",
            width: "100%",
            minWidth: "375px",
            height: "75vh",
            postion: "relative",
            fontFamily: "'Lato', sans-serif",
            color: "#DCDCDC",
            zIndex: "50",
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "flex-end",
            transition: "ease-in-out .75s"
        },

        textContainer: {
            padding: "4% 8%",
            textAlign: "right"
        }
    };

    const responsiveStyles = {
        short: {
            ...styles.tall,
            height: "40vh"
        }
    };

    return (
        <div style={props.isHome ? styles.tall : responsiveStyles.short}>
            <div style={styles.textContainer}>
                <h1 style={styles.headText}>Jamie Woodmancy</h1>
                <h2 style={styles.subHeadText}>Web & App Developer</h2>
            </div>
        </div>
    );
}

export default HeaderComponent;
