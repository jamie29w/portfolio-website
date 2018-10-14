import React from "react";
import backgroundUrl from "../../assets/marina-sparks.jpg";

function HeaderComponent(props) {
  const styles = {
    headText: {
      fontSize: "3.5em",
      fontWeight: "300",
      marginBottom: "10px"
    },
    subHeadText: {
      fontSize: "2.5em",
      fontWeight: "300",
      marginTop: "10px"
    },
    tall: {
      alignItems: "flex-end",
      background: `url(${backgroundUrl}) no-repeat center center`,
      backgroundSize: "cover",
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      OBackgroundSize: "cover",

      color: "#DCDCDC",
      display: "flex",
      flexDirection: "row-reverse",
      fontFamily: "'Lato', sans-serif",
      height: "75vh",
      minWidth: "375px",
      postion: "relative",
      transition: "ease-in-out .75s",
      width: "100%",
      zIndex: "50"
    },

    textContainer: {
      margin: "5% 10%",
      textAlign: "right"
    }
  };

  //spread styles.tall and update height only
  const responsiveStyles = {
    short: {
      ...styles.tall,
      height: "40vh"
    }
  };

  return (
    <div style={props.isHome ? styles.tall : responsiveStyles.short}>
      <div style={styles.textContainer}>
        <h1 style={styles.headText}>Jamie Woodmancy, MBA</h1>
        <h2 style={styles.subHeadText}>Full Stack React Web Developer</h2>
      </div>
    </div>
  );
}

export default HeaderComponent;
