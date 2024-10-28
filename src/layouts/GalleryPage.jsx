import React, { useState, useEffect } from "react";
import "./GalleryPage.css";

const GalleryPage = () => {
    const images = [
        "../assets/Slideshow-Cover-1.jpg",
        "../assets/Slideshow-Cover-2.jpg",
        "../assets/Slideshow-Cover-3.jpg",
        "../assets/Slideshow-Cover-4.jpg",
        "../assets/Slideshow-Cover-5.jpg",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => clearInterval(intervalId);
    }, [images.length]);


    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Left Section (Fixed) */}
                <div className="col-md-7 announcement__left d-flex align-items-center justify-content-center">
                    <div className="text-light p-5">
                        <h5 className="text-uppercase text-light fw-bold">
                            Wedding Announcement
                        </h5>
                        <h1
                            className="display-4 fw-bold mt-3"
                            style={{ letterSpacing: "0.1em", fontSize: "5.5em" }}
                        >
                            Tiffany & Jared
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

                {/* scrol ke bawah */}
                <div className="col-md-5 gallery-section d-flex flex-column align-items-center">
                    <div className="gallery-container">
                        <div className="image-display">
                            <img
                                src={images[currentImageIndex]}
                                alt={`Gallery ${currentImageIndex + 1}`}
                                className="gallery-image"
                            />
                            <div className="text-overlay">
                                <h5 className="text-uppercase">Wedding Announcement</h5>
                                <h1>Tiffany & Jared</h1>
                                <h5 className="hashtag">#TImetoshaRE</h5>
                            </div>
                        </div>
                        <div className="gallery-section d-flex flex-column align-items-center mt-5">
                            <div className="text-center welcome-message">
                                <p className="small-text">DEAR MR-MRS-MS, <br />Family & Friends</p>
                                <h1>Welcome to Tiffany & Jared’s Wedding Website</h1>
                                <i className="sub-text">
                                    Together with joyful hearts and the grace of God, we joyfully announce the upcoming of our marriage.
                                </i>
                            </div>
                            <div className="gallery-section d-flex flex-column align-items-center">
                                <div className="gallery-images d-flex justify-content-center mt-5">
                                    <div className="image-wrapper">
                                        <img
                                            src={images[currentIndex]}
                                            alt={`Gallery ${currentIndex + 1}`}
                                            className="gallery-image"
                                        />
                                    </div>
                                </div>
                                <div className="navigation-buttons d-flex justify-content-center mt-3">
                                    <button onClick={handlePrevClick} className="nav-button">
                                        &#8592;
                                    </button>
                                    <button onClick={handleNextClick} className="nav-button">
                                        &#8594;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
