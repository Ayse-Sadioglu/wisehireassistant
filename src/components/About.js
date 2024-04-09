import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">About Us</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              <p>
                WiseHire assistant aims to revolutionize the way businesses
                discover top talent and modernize the hiring process. WiseHire
                is dedicated to making candidate assessment more efficient and
                recruitment more effective. 
                <p></p>
                <p>
                   
                   Start by submiting CVs of your candidates to unlock new possibilites for your team.</p>
              </p>
            </div>
            <div className="about-image">
              <img alt="aboutusimage" src={"/assets/aboutus.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
