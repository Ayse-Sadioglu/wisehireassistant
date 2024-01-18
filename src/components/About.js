import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    );
    const two = (
      <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      </p>
    );

   

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">about us</span>
          </div>
          <div className="about-content">
            <div className="about-description">
            <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
           
            </div>
            <div className="about-image">
              <img alt="cat" src={"/assets/angy.png"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
