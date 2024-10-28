import React from "react";
import { useNavigate } from "react-router-dom";
import "./WeddingAnnouncement.css";

const WeddingAnnouncement = () => {

  const navigate = useNavigate();
  const handleOpenClick = () => {
    navigate("/gallery");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-8 announcement-left d-flex align-items-start justify-content-center">
          <div className="text-light p-5">
            <h5 className="text-uppercase text-light fw-bold">
              Wedding Announcement
            </h5>
            <h1
              className="display-4 fw-bold mt-5"
              style={{ letterSpacing: "0.1em", fontSize: "5.5em" }}
            >
              Tiffany & <br />
              Jared
            </h1>
            <p className="quote">
              "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak
              sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
              mencintaimu dengan sederhana; dengan isyarat yang tak sempat
              disampaikan awan kepada hujan yang menjadikannya tiada."
            </p>
            <p className="text-light">— Sapardi Djoko Damono</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-4 announcement-right d-flex flex-column align-items-center">          
          <h5 className="text-uppercase text-white fw-bold px-5 py-5 mt-5 align-self-center">
            Wedding Announcement
          </h5>
          
          <div className="text-center mt-auto mb-auto">
            <h1 className="display-4 text-white">
              Tiffany & Jared
            </h1>
            <h5 className="hashtag text-white">#TImetoshaRE</h5>
            <button onClick={handleOpenClick} className="btn btn-outline-light btn-lg mt-4">Open</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingAnnouncement;
