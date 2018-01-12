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
            fontWeight: "100",
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
            marginBottom: "25px",
            padding: "20px"
        },
        punctuation: {
            color: "rgba(39, 58, 100, .9)",
            fontWeight: "400"
        },
        tldr: {
            fontFamily: "'Lato', sans-serif",
            fontSize: ".55em",
            fontWeight: "100",
            letterSpacing: "0px",
            lineHeight: "125%",
            marginLeft: "25px",
            marginRight: "25px",
            marginBottom: "20px",
            textAlign: "justify"
        }
    };

    return (
        <div>
            <div style={styles.homeView}>
                <h3 style={styles.headText}>Hello world,</h3>

                <h3 style={styles.bodyText}>
                    I{`'`}m a seasoned professional turned programmer, looking
                    for a company that wants to improve lives by building great
                    tools.
                </h3>

                <h3 style={styles.bodyText}>
                    I've worked alongside senior leaders for more than half of
                    my career and so place a high value on time effectiveness
                    over time spent. I believe the best use of technology is to
                    enable people to do more of the things that matter most.
                </h3>
                <h3 style={styles.bodyText}>
                    I also believe great user interface is born of a romance
                    between clear purpose and an intuitive experience. Content
                    is king. Design is his ambassador and should point to his
                    greatness.
                </h3>
                <h3 style={styles.bodyText}>
                    As fruit of these passions, I love creating new and better
                    ways to do more good and equipping others to as well. If you
                    feel the same, let{`'`}s change the world together.
                </h3>
                <h3 style={styles.tldr}>
                    Value-Added <span style={styles.punctuation}>|</span> UX/UI{" "}
                    <span style={styles.punctuation}>|</span> Empowering Others
                </h3>
                <h3 style={styles.bodyText}>Cheers!</h3>
                <h3 style={styles.bodyText}>-Jamie W</h3>
            </div>
            <div>
                <SkillsComponent />
            </div>
        </div>
    );
}

export default HomeComponent;
