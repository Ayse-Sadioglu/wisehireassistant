// OpenPositions.js

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

  render() {
    const { positions } = this.props;

    return (
      <div id="openpositions">
        <div className="section-header">
          <span className="section-title">Open Positions</span>
        </div>

        <div className="openpositions-container">
          <ul className="openpositions-grid">
            {positions.map((position, i) => (
              <FadeInSection key={i} delay={`${i + 1}00ms`}>
                <li className="openpositions-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                    </div>
                  </div>
                  <div className="custom-card-title">
                    {position.jobTitle} @ {position.companyName}
                  </div>
                  <div className="custom-card-desc" style={{ color: '#b4eba5' }}>
                    Salary:
                  </div>
                  <div className="custom-card-tech" style={{ color: 'white' }}>
                    {position.salary}
                  </div>
                  <div className="custom-card-desc" style={{ color: '#b4eba5' }}>
                    Job Description:
                  </div>
                  <div className="custom-card-tech" style={{ color: 'white' }}>
                    {position.description}
                  </div>
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