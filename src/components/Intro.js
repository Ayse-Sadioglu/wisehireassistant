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
            
            <span className="intro-name">{"WISEHIRE"}</span>
            
          </span>
        
        <FadeInSection>
          <div className="intro-subtitle">lorem ipsum</div>
          <div className="intro-desc">
            lorem ipsum
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
