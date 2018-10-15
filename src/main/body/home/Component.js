import React from "react";
import SkillsComponent from "../skills/Component";

function HomeComponent(props) {
  const styles = {
    bodyText: {
      fontFamily: "'Lato', sans-serif",
      fontSize: ".55em",
      fontWeight: "300",
      letterSpacing: "0px",
      lineHeight: "125%",
      marginLeft: "25px",
      marginRight: "25px",
      marginBottom: "20px",
      textAlign: "justify"
    },
    headText: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: "300",
      fontStyle: "italic",
      fontSize: ".9em",
      marginLeft: "25px",
      marginTop: "25px",
      textAlign: "justify"
    },
    homeView: {
      backgroundColor: "rgba(42, 46, 55, .7)",
      borderRadius: "10px",
      color: "#DCDCDC",
      marginTop: "20px",
      marginBottom: "20px",
      padding: "20px"
    },
    punctuation: {
      color: "rgba(39, 58, 100, .9)",
      fontWeight: "400"
    }
  };

  return (
    <div>
      <SkillsComponent />
      <div style={styles.homeView}>
        <h3 style={styles.headText}>Hello world,</h3>

        <h3 style={styles.bodyText}>
          I{`'`}m a professional turned programmer, looking for a company to
          partner with that wants to improve lives by building great products.
        </h3>

        <h3 style={styles.bodyText}>
          I've moved the dial as a leader in sales, healthcare, and educational
          technology. Problem solving is my trade, and enhancing processes is my
          obsession. I use a combination of Lean principles and Agile Scrum
          tools to lead teams to create profitable change. I believe the best
          use of technology is to enable people to do more of the things that
          matter most.
        </h3>
        <h3 style={styles.bodyText}>
          Profitability happens when happy users feel like rockstars using your
          product. Great user experience is the love child of clear product
          purpose and user empathy in design.
        </h3>
        <h3 style={styles.bodyText}>
          As fruit of these passions, I love creating new and better ways to do
          more good and equipping others to as well. If you feel the same, let
          {`'`}s change the world together.
        </h3>
        <h3 style={styles.bodyText}>
          Empowering Others <span style={styles.punctuation}>|</span>{" "}
          Value-Added <span style={styles.punctuation}>|</span> UX/UI
        </h3>
        <h3 style={styles.bodyText}>Cheers!</h3>
        <h3 style={styles.bodyText}>-Jamie W</h3>
      </div>
      {/* <div>
        <SkillsComponent />
      </div> */}
    </div>
  );
}

export default HomeComponent;
