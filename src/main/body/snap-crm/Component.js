import React from "react";
import snapCrmDesktopMain from "../../../assets/snap-crm-desktop-main.png";
import snapCrmDesktopModal from "../../../assets/snap-crm-desktop-modal.png";
import snapCrmMobileMain from "../../../assets/snap-crm-mobile-main.png";
import snapCrmMobileAdd from "../../../assets/snap-crm-mobile-add.png";


export default function SnapCRMComponent() {
    const styles = {
        headText: {
            fontFamily: "'Lato', sans-serif",
            fontSize: ".7em",
            fontWeight: "300",
            margin: "15px 15px",
            textAlign: "justify"
        },
        mobileImageStyles: {
            display: 'flex',
            flexFlow: 'row wrap',justifyContent: 'space-around'
        },
        snapCRMView: {
            alignContent: "center",
            alignItems: "center",
            display: "flex",
            flex: "1",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-around",
            textAlign: "center",
            width: "100%"
        }
    };

    return (
        <div style={styles.snapCRMView}>
            <h2 style={styles.headText}>
                Demo it{" "}
                <a
                    className="blueLinks"
                    href="https://snap-crm.now.sh"
                    target="_blank"
                    rel="noopener noreferrer">
                    here
                </a>
                .
            </h2>
            <h2 style={styles.headText}>
                Check the code at my{" "}
                <a
                    className="blueLinks"
                    href="https://github.com/jamie29w/snap-crm"
                    rel="noopener noreferrer"
                    target="_blank">
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
            <img
                alt="Screenshot of Snap CRM Home Screen"
                className="imageStyles"
                src={snapCrmDesktopMain}
            />
            <h2 style={styles.headText}>
                Users have the ability to create, update, and remove client
                session cards. Each card shows the client's name and session
                details: type, location, date, deposit, and quote along with
                payment status and special requests/notes.
            </h2>
            <img
                alt="Screenshot of Snap CRM Add/Edit Modal"
                className="imageStyles"
                src={snapCrmDesktopModal}
            />
            <h2 style={styles.headText}>
                Responsive and lightweight, Snap CRM was built with ReactJS on
                the front end and MongoDB and NodeJS on the back end.
            </h2>
            <div style={styles.mobileImageStyles}>
                <img
                    alt="Screenshot of Snap CRM Home Screen Mobile View"
                    className="imageStyles"
                    src={snapCrmMobileMain}
                />
                <img
                    alt="Screenshot of Snap CRM Home Screen Mobile View"
                    className="imageStyles"
                    src={snapCrmMobileAdd}
                />
            </div>
        </div>
    );
}
