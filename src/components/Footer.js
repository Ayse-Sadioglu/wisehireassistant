import React from "react";
import "../styles/Footer.css";
import FadeInSection from "./FadeInSection";
import Modal from "react-modal";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      isModalOpen: false,
      companyName: "",
      jobTitle: "",
      salary: "",
      jobDescription: ""
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    // Perform any action you need with the form data
    // For example, you can log the data to the console
    console.log("Form submitted:", this.state);

    // Close the modal after submission
    this.closeModal();

    // Prevent the default form submission behavior
    event.preventDefault();
  }

  render() {
    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">Create a Position</span>
          </div>
          <div className="about-content">
            <div className="about-description" style={{ textAlign: "center" }}>
              <p>Start by creating a position to compare your candidates</p>
              <button onClick={this.openModal} style={{ color: "black", height: "50px", width: "300px", marginTop: "20px" }}>
                Post Job
              </button>
            </div>
            <div className="about-image">
              <img alt="getstartedimage" src={"/assets/get.jpg"} />
            </div>
          </div>
        </FadeInSection>

        {/* Modal for the form */}
        <Modal isOpen={this.state.isModalOpen} onRequestClose={this.closeModal} style={{
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    width: '400px',
    margin: 'auto',
    marginTop: '50px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxHeight: '80vh', 
    backgroundColor: '#27374D', 
    color: '#F9E8D9' 
  }
}}>
  <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
    <label style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
      <span style={{ marginBottom: '5px', color: '#F9E8D9' }}>Company Name:</span>
      <input type="text" name="companyName" value={this.state.companyName} onChange={this.handleInputChange} style={{ padding: '8px', borderRadius: '4px', color: 'black' }} />
    </label>
    <label style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
      <span style={{ marginBottom: '5px', color: '#F9E8D9' }}>Job Title:</span>
      <input type="text" name="jobTitle" value={this.state.jobTitle} onChange={this.handleInputChange} style={{ padding: '8px', borderRadius: '4px', color: 'black' }} />
    </label>
    <label style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
      <span style={{ marginBottom: '5px', color: '#F9E8D9' }}>Salary:</span>
      <input type="text" name="salary" value={this.state.salary} onChange={this.handleInputChange} style={{ padding: '8px', borderRadius: '4px', color: 'black' }} />
    </label>
    <label style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
      <span style={{ marginBottom: '5px', color: '#F9E8D9' }}>Job Description:</span>
      <textarea name="jobDescription" value={this.state.jobDescription} onChange={this.handleInputChange} style={{ padding: '8px', borderRadius: '4px', height: '100px', color: 'black' }} />
      
    </label>
    <button type="submit" style={{ alignSelf: 'flex-end', marginTop: '10px', padding: '8px 16px', backgroundColor: 'rgba(255, 255, 255, 0.2)', border: 'none', borderRadius: '4px', color: 'black' }}>Submit</button>
    
  </form>
</Modal>
      </div>
    );
  }
}

export default Footer;
