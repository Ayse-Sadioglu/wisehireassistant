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
          <span className="section-title">Create  a Position</span>
        </div>
        <div className="about-content">
          <div className="about-description" style={{ textAlign: "center" }}>
          <p>
          Start by creating a position to compare your candidates 
     
      </p>
      <button onClick={() => alert("Button clicked!")}style={{ color: "black", height: "50px", width: "300px" , marginTop: "20px"}}>
                Post Job
              </button>
         
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
