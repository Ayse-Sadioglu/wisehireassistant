import React, { useState, useEffect } from "react";
import "../styles/OpenPositions.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import Modal from "react-modal";
import axios from 'axios'; // HTTP requests can made by using axios.

// Function to generate rows for the table
function createData(name, rank, ConsistencyInfo, Resume) {
  return { name, rank, ConsistencyInfo, Resume };
}

const OpenPositions = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalforDeletion, setShowModalforDeletion] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null); 
  const [resumeFile, setResumeFile] = useState(null); // State to store the selected resume file
  const [positions, setPositions] = useState([]); // State to store positions data

  // This useEffect hook is used to fetch positions when the component mounts
  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = () => {
    // GET request to the backend API to get all positions
    axios.get("/api/position/getAllPositions")
      .then((response) => {
        setPositions(response.data.positions);
      })
      .catch((error) => {
        console.error("Error fetching positions:", error);
      });
  };

  const deletePosition = (positionId) => {
    // DELETE request to the backend API to  delete selected position
    axios.delete(`/api/position/deletePosition/${positionId}`)
      .then((response) => {
        console.log("selected: " + positionId);
        console.log("Position deleted successfully");
        fetchPositions(); // Refresh positions after deletion
      })
      .catch((error) => {
        console.error("Error deleting position:", error);
      });
  };

  const uploadResume = (file) => { 
    // POST request to the backend API to upload resume
    if (!file) { 
      var popup = document.createElement("div");
      popup.textContent = "Please select a pdf file!";
      popup.style.width = "fit-content"; 
      popup.style.margin = "auto";
      popup.style.marginTop = "20px"; 
      popup.style.padding = "20px";
      popup.style.borderRadius = "8px";
      popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      popup.style.backgroundColor = "#ffffff"; 
      popup.style.color = "#27374D"; 
      popup.style.textAlign = "center";
      popup.style.position = "fixed"; 
      popup.style.top = "0"; 
      popup.style.left = "50%";
      popup.style.transform = "translateX(-50%)"; 
      popup.style.zIndex = "9999";
      document.body.appendChild(popup);
      // Uses a timer to remove the pop-up after a certain period of time
      setTimeout(function() {
          document.body.removeChild(popup);
      }, 5000); // 5000 miliseconds = 5 seconds
      return;
    }  
    const formData = new FormData();
    formData.append("file", file); 
    axios.post("/api/resume/evaluate", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then(response => {
      console.log("API response:", response.data);
      // Creates a custom pop-up div element
      var popup = document.createElement("div");
      popup.textContent = "The resume has been successfully uploaded and evaluated!";
      popup.style.width = "fit-content"; 
      popup.style.margin = "auto";
      popup.style.marginTop = "20px"; 
      popup.style.padding = "20px";
      popup.style.borderRadius = "8px";
      popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      popup.style.backgroundColor = "#ffffff"; 
      popup.style.color = "#27374D"; 
      popup.style.textAlign = "center";
      popup.style.position = "fixed"; 
      popup.style.top = "0"; 
      popup.style.left = "50%";
      popup.style.transform = "translateX(-50%)"; 
      popup.style.zIndex = "9999";
      document.body.appendChild(popup);
      // Uses a timer to remove the pop-up after a certain period of time
      setTimeout(function() {
          document.body.removeChild(popup);
      }, 5000); // 5000 miliseconds = 5 seconds
    })
    .catch(error => {
      console.error("Error uploading resume:", error);
      var popup = document.createElement("div");
      popup.textContent = "An error occurred while uploading the file!";
      popup.style.width = "fit-content"; 
      popup.style.margin = "auto";
      popup.style.marginTop = "20px"; 
      popup.style.padding = "20px";
      popup.style.borderRadius = "8px";
      popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      popup.style.backgroundColor = "#ffffff"; 
      popup.style.color = "#27374D"; 
      popup.style.textAlign = "center";
      popup.style.position = "fixed"; 
      popup.style.top = "0"; 
      popup.style.left = "50%";
      popup.style.transform = "translateX(-50%)"; 
      popup.style.zIndex = "9999";
      document.body.appendChild(popup);
      // Uses a timer to remove the pop-up after a certain period of time
      setTimeout(function() {
          document.body.removeChild(popup);
      }, 5000); // 5000 miliseconds = 5 seconds
    });
  };

  const openModal = (position) => {
    setSelectedPosition(position);
    setShowModal(true);
  };

  const openModalforDeletion = (position) => {
    setSelectedPosition(position);
    setShowModalforDeletion(true);
  };

  const closeModal = () => {
    setSelectedPosition(null);
    setShowModal(false);
    setResumeFile(null); // Reset the selected resume file when closing the modal
  };

  const closeModalforDeletion = () => {
    setSelectedPosition(null);
    setShowModalforDeletion(false);
  };

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the first file from the selected files
    if (file && file.type === "application/pdf") {
      setResumeFile(file); // Set the selected file if it's a PDF
      uploadResume(file);
    } else {
      alert("Please select a PDF file."); 
    }
  };

  // Dummy data
  // TODO: Change with real data
  const data = [
    {
      name: "Anom",
      Rank: "%19",
      ConsistencyInfo: "consistent",
      Resume: "resume.pdf",//change this type to pdf
    },
  ];

  return (
    <div id="openpositions">
      <div className="section-header">
        <span className="section-title">Open Positions</span>
      </div>

      <div className="openpositions-container" style={{ fontSize: 25 }}>
        {positions.length === 0 ? (
          <p>There are currently no positions open</p>
        ) : (
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
                  <div
                    className="custom-card-desc"
                    style={{ color: "#b4eba5" }}
                  >
                    Annual Salary:
                  </div>
                  <div className="custom-card-tech" style={{ color: "white" }}>
                    {position.salary}
                  </div>
                  <div
                    className="custom-card-desc"
                    style={{ color: "#b4eba5" }}
                  >
                    Job Description:
                  </div>
                  <div className="custom-card-tech" style={{ color: "white" }}>
                    {position.description}
                  </div>
                  <button
                    className="upload-resume-button"
                    onClick={() => openModal(position)}
                  >
                    See Details
                  </button>

                  <label className="upload-resume-button">
                    Upload Resume
                    <input
                      type="file"
                      accept="application/pdf"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                  </label>
                  <button
                    className="upload-resume-button delete-button"
                    onClick={() => openModalforDeletion(position)}
                  >
                    Delete Position
                  </button>
                </li>
              </FadeInSection>
            ))}
          </ul>
        )}
      </div>

      {/* Modal for details */}
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          content: {
            width: "800px",
            margin: "auto",
            marginTop: "50px",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxHeight: "100vh",
            backgroundColor: "#fff",
            color: "#000",
          },
        }}
      >
        <h2
          style={{
            color: "#27374D",
            marginBottom: "10px",
          }}
        >
          Details for {selectedPosition?.jobTitle} @{" "}
          {selectedPosition?.companyName}
        </h2>
        <div className="detailstable">
          <table>
            <tr>
              <th>Name</th>
              <th>Rank</th>
              <th>Consistency Information</th>
              <th>Resume </th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.Rank}</td>
                  <td>{val.ConsistencyInfo}</td>
                  <td>{val.Resume}</td>
                </tr>
              );
            })}
          </table>
        </div>
            
        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#27374D",
            color: "#F9E8D9",
            borderRadius: "5px",
          }}
        >
          Close
        </button>
      </Modal>

      {/* Modal for confirmation of deletion */}
      <Modal
        isOpen={showModalforDeletion}
        onRequestClose={closeModalforDeletion}
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          content: {
            width: "300px",
            margin: "auto",
            marginTop: "100px",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxHeight: "50vh", 
            backgroundColor: "#27374D",
            color: "#fff",
            textAlign: "center"
          },
        }}
      >
        <h2 style={{ color: "#f5f5f5", marginBottom: "40px", textAlign: "center" }}>
          Do you confirm your deletion?
        </h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => {
              deletePosition(selectedPosition?.id);
              closeModalforDeletion();
            }}
            style={{
              backgroundColor: "#90EE90",
              color: "#27374D",
              borderRadius: "5px",
              padding: "10px 20px",
              margin: "0 10px",
              cursor: "pointer",
            }}
          >
            Yes
          </button>
          <button
            onClick={closeModalforDeletion}
            style={{
              backgroundColor: "#F0A49A",
              color: "#27374D",
              borderRadius: "5px",
              padding: "10px 20px",
              margin: "0 10px",
              cursor: "pointer",
            }}
          >
            No
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default OpenPositions;
