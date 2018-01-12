import React from "react";
import snapCrmMainImg from "../../../assets/snap-crm-main.png";
import snapCrmModalImg from "../../../assets/snap-crm-modal.png";
import snapCrmResponsiveImg from "../../../assets/snap-crm-responsive.png";

export default function SnapCRMComponent() {
    const styles = {
        headText: {
            fontFamily: "'Lato', sans-serif",
            fontWeight: "300",
            fontSize: ".7em",
            margin: "15px 15px",
            textAlign: "justify"
        },
        snapCRMView: {
            alignContent: "center",
            width: "100%",
            textAlign: "center",
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            flexWrap: "wrap",
            alignItems: "center"
        }
    };

    return (
        <div style={styles.snapCRMView}>
            <h2 style={styles.headText}>
                Demo it{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://snap-crm.jamiew.io/"
                    className="blueLinks">
                    here
                </a>
                .
            </h2>
            <h2 style={styles.headText}>
                See the code at my{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/jamie29w/snap-crm"
                    className="blueLinks">
                    Github repo
                </a>
                .
            </h2>
            <h2 style={styles.headText}>
                Snap CRM is a lightweight Customer Relationship Managment tool I
                created with my wife and her photography business in mind.
                Photographers can use Snap CRM to keep track of their upcoming
                sessions.
            </h2>
            <img className="imageStyles" src={snapCrmMainImg} alt="" />
            <h2 style={styles.headText}>
                Users have the ability to create, update, and remove client
                session cards. Each card shows the client's name and session
                details: type, location, date, deposit, and quote along with
                payment status and special requests/notes.
            </h2>
            <img className="imageStyles" src={snapCrmModalImg} alt="" />
            <h2 style={styles.headText}>
                Responsive and lightweight, Snap CRM was built with ReactJS on
                the front end and MongoDB and NodeJS on the back end.
            </h2>
            <img className="imageStyles" src={snapCrmResponsiveImg} alt="" />
        </div>
    );
}
