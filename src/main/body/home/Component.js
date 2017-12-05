import React from "react";
import SkillsComponent from "../skills/Component";

function HomeComponent(props) {
    const homeViewStyles = {
        backgroundColor: "rgba(42, 46, 55, .7)",
        color: "#DCDCDC",
        marginTop: "20px",
        marginBottom: "25px",
        borderRadius: "10px",
        padding: "20px"
    };

    const headTextStyles = {
        fontFamily: "'Lato', sans-serif",
        fontWeight: "100",
        fontStyle: "italic",
        fontSize: ".9em",
        marginTop: "25px",
        marginLeft: "25px",
        textAlign: "justify"
    };

    const bodyTextStyles = {
        fontFamily: "'Lato', sans-serif",
        fontSize: ".55em",
        fontWeight: "300",
        marginBottom: "20px",
        textAlign: "justify",
        lineHeight: "125%",
        marginLeft: "25px",
        marginRight: "25px",
        letterSpacing: "0px"
    };

    const tldrStyles = {
        fontFamily: "'Lato', sans-serif",
        fontSize: ".55em",
        fontWeight: "100",
        marginBottom: "20px",
        textAlign: "justify",
        lineHeight: "125%",
        marginLeft: "25px",
        marginRight: "25px",
        letterSpacing: "0px"
    };
    const punctuationStyles = {
        color: "rgba(39, 58, 100, .9)",
        fontWeight: "400"
    };

    return (
        <div>
            <div style={homeViewStyles}>
                <h3 style={headTextStyles}>Hello world,</h3>

                <h3 style={bodyTextStyles}>
                    I{`'`}m a seasoned professional turned programmer, looking
                    for a company that wants to improve lives by building great
                    tools.
                </h3>

                <h3 style={bodyTextStyles}>
                    I've worked alongside senior leaders for more than half of
                    my career and so place a high value on time effectiveness
                    over time spent. I believe the best use of technology is to
                    enable people to do more of the things that matter most.
                </h3>
                <h3 style={bodyTextStyles}>
                    I also believe great user interface is born of a romance
                    between clear purpose and an intuitive experience. Content
                    is king. Design is his ambassador and should point to his
                    greatness.
                </h3>
                <h3 style={bodyTextStyles}>
                    As fruit of these passions, I love creating new and better
                    ways to do more good and equipping others to as well. If you
                    feel the same, let{`'`}s change the world together.
                </h3>
                <h3 style={tldrStyles}>
                    Value-Added <span style={punctuationStyles}>|</span> UX/UI{" "}
                    <span style={punctuationStyles}>|</span> Empowering Others
                </h3>
                <h3 style={bodyTextStyles}>Cheers!</h3>
                <h3 style={bodyTextStyles}>-Jamie W</h3>
            </div>
            <div>
                <SkillsComponent />
            </div>
        </div>
    );
}

export default HomeComponent;
