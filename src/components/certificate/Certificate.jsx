import React from "react";
import "./certificate.css"; // Importing the CSS file for styling

const Certificate = () => {
  return (
    <div className="certificate-container">
      <h2>MERN Stack Development - UpGrad</h2>
      <div className="certificate-preview">
        <img
          src="public\upGrad-certificate.png" // Replace with the path to the thumbnail of your certificate
          alt="MERN Stack Certificate"
          className="certificate-image"
        />
      </div>
      <p className="certificate-text">
        I successfully completed the <strong>MERN Stack Development</strong>{" "}
        course from UpGrad. Click below to view the certificate:
      </p>
      <div className="certificate-links">
        <a
          href="https://drive.google.com/file/d/1AntvBWdANLs7qCzrdtq0c0g7bAw6Tnz1/view?usp=drive_link" // Replace with the path to the full certificate or verification link
          target="_blank"
          rel="noopener noreferrer"
          className="view-certificate-link"
        >
          View Full Certificate
        </a>
      </div>
    </div>
  );
};

export default Certificate;
