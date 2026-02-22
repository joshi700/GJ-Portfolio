import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function PrivacyPolicy() {
  const styles = {
    section: {
      position: "relative",
      paddingTop: "100px",
      paddingBottom: "30px",
      backgroundColor: "#ffffff",
      minHeight: "100vh",
    },
    content: {
      backgroundColor: "#ffffff",
      padding: "40px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      fontSize: "2.5em",
      fontWeight: "700",
      color: "#2c3e50",
      marginBottom: "30px",
      textAlign: "center",
      borderBottom: "3px solid #3498db",
      paddingBottom: "15px",
    },
    date: {
      color: "#7f8c8d",
      fontSize: "0.95em",
      marginBottom: "10px",
    },
    sectionBlock: {
      marginTop: "30px",
      marginBottom: "30px",
    },
    subHeading: {
      fontSize: "1.8em",
      fontWeight: "600",
      color: "#2c3e50",
      marginBottom: "15px",
      borderLeft: "4px solid #3498db",
      paddingLeft: "15px",
    },
    paragraph: {
      fontSize: "1.05em",
      lineHeight: "1.8",
      color: "#34495e",
      marginBottom: "15px",
      textAlign: "justify",
    },
    list: {
      marginLeft: "20px",
      marginBottom: "15px",
    },
    listItem: {
      fontSize: "1.05em",
      lineHeight: "1.8",
      color: "#34495e",
      marginBottom: "10px",
    },
    contactInfo: {
      backgroundColor: "#f8f9fa",
      padding: "20px",
      borderRadius: "8px",
      borderLeft: "4px solid #3498db",
      marginTop: "15px",
    },
    contactParagraph: {
      marginBottom: "8px",
      fontSize: "1.05em",
    },
    link: {
      color: "#3498db",
      textDecoration: "none",
      fontWeight: "500",
    },
    footer: {
      marginTop: "40px",
      paddingTop: "20px",
      borderTop: "2px solid #ecf0f1",
      textAlign: "center",
      fontSize: "0.95em",
      color: "#7f8c8d",
      fontStyle: "italic",
    },
  };

  return (
    <Container fluid style={styles.section}>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={10}
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <div style={styles.content}>
              <h1 style={styles.heading}>Privacy Policy</h1>
              
              <p style={styles.date}>
                <strong>Effective Date:</strong> October 25, 2025
              </p>
              
              <p style={styles.date}>
                <strong>Last Updated:</strong> October 25, 2025
              </p>

              <div style={styles.sectionBlock}>
                <h2 style={styles.subHeading}>Introduction</h2>
                <p style={styles.paragraph}>
                  Welcome to HCO_MASTERCARD ("the App"). This Privacy Policy explains how 
                  HCO_MASTERCARD, developed by Gaurav Joshi, handles information in relation 
                  to your use of our iOS application.
                </p>
                <p style={styles.paragraph}>
                  HCO_MASTERCARD is a demonstration application designed exclusively for sales 
                  teams to showcase hosted checkout payment flows and demonstrate payment gateway 
                  capabilities to clients and stakeholders.
                </p>
              </div>

              <div style={styles.sectionBlock}>
                <h2 style={styles.subHeading}>Information We Collect</h2>
                <p style={styles.paragraph}>
                  <strong>HCO_MASTERCARD does not collect, store, or transmit any personal information 
                  or user data.</strong>
                </p>
                <p style={styles.paragraph}>Specifically, we do not collect:</p>
                <ul style={styles.list}>
                  <li style={styles.listItem}>Personal identification information (name, email, phone number, etc.)</li>
                  <li style={styles.listItem}>Device information (device ID, iOS version, etc.)</li>
                  <li style={styles.listItem}>Location data</li>
                  <li style={styles.listItem}>Payment information or financial data</li>
                  <li style={styles.listItem}>Usage analytics or behavioral data</li>
                  <li style={styles.listItem}>Cookies or tracking technologies</li>
                  <li style={styles.listItem}>Any other form of user data</li>
                </ul>
              </div>

              <div style={styles.sectionBlock}>
                <h2 style={styles.subHeading}>Demo Transactions</h2>
                <p style={styles.paragraph}>
                  The App is designed to demonstrate payment gateway capabilities using test/demo 
                  transactions only. All payment flows shown in the application are simulations 
                  for demonstration purposes.
                </p>
                <p style={styles.paragraph}>
                  <strong>No real payment information is processed, transmitted, or stored.</strong> 
                  Any payment details entered during demonstrations are handled in a secure test 
                  environment and are not retained by the application.
                </p>
              </div>

              <div style={styles.sectionBlock}>
                <h2 style={styles.subHeading}>Third-Party Services</h2>
                <p style={styles.paragraph}>
                  HCO_MASTERCARD does not integrate with any third-party analytics services, 
                  advertising networks, or data collection tools. The app operates independently 
                  without sharing any information with external parties.
                </p>
              </div>

              <div style={styles.sectionBlock}>
                <h2 style={styles.subHeading}>Data Storage</h2>
                <p style={styles.paragraph}>
                  The App does not store any data locally on your device or on any remote servers. 
                  No databases, caches, or persistent storage mechanisms are used to retain user 
                  information or session data.
                </p>
              </div>

              <div style={styles.sectionBlock}>
                <h2 style={styles.subHeading}>Children's Privacy</h2>
                <p style={styles.paragraph}>
                  HCO_MASTERCARD is intended for use by sales professionals and business stakeholders. 
                  The App is not directed at children under the age of 13, and we do not knowingly 
                  collect any information from children.
                </p>
              </div>

              <div style={styles.sectionBlock}>
                <h2 style={styles.subHeading}>Security</h2>
                <p style={styles.paragraph}>
                  While HCO_MASTERCARD does not collect any user data, we are committed to ensuring 
                  the app operates securely. The demonstration environment is designed to showcase 
                  payment gateway capabilities safely without compromising any real user information.
                </p>
              </div>

              <div style={styles.sectionBlock}>
                <h2 style={styles.subHeading}>Changes to This Privacy Policy</h2>
                <p style={styles.paragraph}>
                  We may update this Privacy Policy from time to time. Any changes will be reflected 
                  by updating the "Last Updated" date at the top of this policy. We encourage you to 
                  review this Privacy Policy periodically for any changes.
                </p>
              </div>

              <div style={styles.sectionBlock}>
                <h2 style={styles.subHeading}>Your Rights</h2>
                <p style={styles.paragraph}>
                  Since HCO_MASTERCARD does not collect any personal information, there is no user 
                  data to access, modify, or delete. You maintain complete privacy while using the App.
                </p>
              </div>

              <div style={styles.sectionBlock}>
                <h2 style={styles.subHeading}>Contact Us</h2>
                <p style={styles.paragraph}>
                  If you have any questions or concerns about this Privacy Policy or the HCO_MASTERCARD 
                  application, please contact us at:
                </p>
                <div style={styles.contactInfo}>
                  <p style={styles.contactParagraph}><strong>Developer:</strong> Gaurav Joshi</p>
                  <p style={styles.contactParagraph}>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:joshi700@gmail.com" style={styles.link}>
                      joshi700@gmail.com
                    </a>
                  </p>
                  <p style={styles.contactParagraph}><strong>Phone:</strong> +91 88262 30460</p>
                </div>
              </div>

              <div style={styles.sectionBlock}>
                <h2 style={styles.subHeading}>Consent</h2>
                <p style={styles.paragraph}>
                  By using HCO_MASTERCARD, you acknowledge that you have read and understood this 
                  Privacy Policy. Since the App does not collect any personal information, your use 
                  of the application does not involve the sharing or processing of any personal data.
                </p>
              </div>

              <div style={styles.footer}>
                <p>
                  This Privacy Policy is effective as of the date stated above and applies to the 
                  HCO_MASTERCARD iOS application developed by Gaurav Joshi.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default PrivacyPolicy;
