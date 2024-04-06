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
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [resumeFile, setResumeFile] = useState(null); // State to store the selected resume file
  const [positions, setPositions] = useState([]); // State to store positions data

  // This useEffect hook is used to fetch positions when the component mounts
  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = () => {
    // GET request to the backend API
    axios.get("/api/position/getAllPositions")
      .then((response) => {
        setPositions(response.data.positions);
      })
      .catch((error) => {
        console.error("Error fetching positions:", error);
      });
  };

  const openModal = (position) => {
    setSelectedPosition(position);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedPosition(null);
    setShowModal(false);
    setResumeFile(null); // Reset the selected resume file when closing the modal
  };

  /* TODO: Activate when delete buton is written
  const deletePosition = (positionId) => {
    axios.delete(`/api/position/deletePosition/${positionId}`)
      .then((response) => {
        console.log("Position deleted successfully");
        fetchPositions(); // Refresh positions after deletion
      })
      .catch((error) => {
        console.error("Error deleting position:", error);
      });
  };

  */

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the first file from the selected files
    if (file && file.type === "application/pdf") {
      setResumeFile(file); // Set the selected file if it's a PDF
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
                    // TODO: Implement delete position
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
    </div>
  );
};

export default OpenPositions;
