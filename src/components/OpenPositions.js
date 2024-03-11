import React from "react";
import "../styles/OpenPositions.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

class OpenPositions extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }

  handleUploadResume(position) {
    // Implement the logic for uploading a resume for the selected position
    console.log(`Uploading resume for ${position}`);
  }

  render() {
    const positions = {
      "Software Engineer @Google": {
        desc: "Job Description",
        skills: "Java, Android Studio",
        open: "",
      },
      "HR @Google": {
        desc: "Job Description",
        skills: "Python",
        open: "",
      },
      // Add new positions here
      "New Position @Company1": {
        desc: "New Job Description 1",
        skills: "React, JavaScript",
        open: "",
      },
      "New Position @Company2": {
        desc: "New Job Description 2",
        skills: "React, JavaScript",
        open: "",
      },
    };

    return (
      <div id="openpositions">
        <div className="section-header">
          <span className="section-title">Open Positions</span>
        </div>

        <div className="openpositions-container">
          <ul className="openpositions-grid">
            {Object.keys(positions).map((key, i) => (
              <FadeInSection key={key} delay={`${i + 1}00ms`}>
                <li className="openpositions-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                  </div>
                  <div className="card-title">{key}</div>
                  <div className="card-desc">{positions[key]["desc"]}</div>
                  <div className="card-tech">{positions[key]["skills"]}</div>
                  <button
                    onClick={() => this.handleUploadResume(key)}
                    className="upload-resume-button"
                  >
                    Upload Resume
                  </button>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default OpenPositions;
