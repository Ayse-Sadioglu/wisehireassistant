import React from "react";
import "../styles/Footer.css";
import FadeInSection from "./FadeInSection";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">Get Started</span>
        </div>
        <div className="about-content">
          <div className="about-description">
          <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
         
          </div>
          <div className="about-image">
            <img alt="getstartedimage" src={"/assets/get.jpg"} />
          </div>
        </div>
      </FadeInSection>
    </div>
    );
  }
}

export default Footer;