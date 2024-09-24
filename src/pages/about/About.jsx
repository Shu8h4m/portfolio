import { useState } from "react";
import Education from "../../components/education/Education";
import Experience from "../../components/experience/Experience";
import Skills from "../../components/skills/Skills";
import "./about.css";
import Certificate from "../../components/certificate/Certificate";

const About = () => {
  const [tab, setTab] = useState(1);

  return (
    <div className="about-container">
      <div className="about-container-wrapper">
        <div className="about-tab-container">
          <div
            className={tab == 1 ? "clicked" : "about-tab"}
            onClick={() => setTab(1)}
          >
            Experience
          </div>
          <div
            className={tab == 2 ? "clicked" : "about-tab"}
            onClick={() => setTab(2)}
          >
            Technical Skills
          </div>
          <div
            className={tab == 3 ? "clicked" : "about-tab"}
            onClick={() => setTab(3)}
          >
            Course & Certificates
          </div>
          <div
            className={tab == 4 ? "clicked" : "about-tab"}
            onClick={() => setTab(4)}
          >
            Education
          </div>
        </div>
        <div className="about-content-container">
          <div className="about-content">
            {tab == 1 ? (
              <Experience />
            ) : tab == 2 ? (
              <Skills />
            ) : tab == 3 ? (
              <Certificate />
            ) : (
              <Education />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
