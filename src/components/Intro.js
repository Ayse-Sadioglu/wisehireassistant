import React from "react";
import "../styles/Intro.css";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
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
      <div id="intro">
        <FractalTree></FractalTree>
        

        
          <span className="intro-title">
            
            <span className="intro-name">{"WISE WAY OF HIRING"}</span>
            
          </span>
        
        <FadeInSection>
          {/*<div className="intro-subtitle">Elevate Your Recruitment Game with AI</div>*/}
          <div className="intro-desc">
          Step into the future of recruitment with our AI-powered assistant.Revolutionize the way you hire by letting our smart system analyze resumes and enhance your hiring process.Upload your CV now and discover your perfect match!


          </div>
          <a
            className="intro-contact"
          >
            {" CV YUKLE"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
