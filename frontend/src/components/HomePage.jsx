import React from "react";
import CourseList from "../components/CourseList";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS is imported
import "./HomePage.css"; // Import custom styles
import picture from "../components/picture/home.jpg"; // Import the first image
import picture2 from "../components/picture/home1.jpeg"; // Import the second image

const HomePage = () => {
  return (
    <div
      className="container mt-4 p-2"
      style={{
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Carousel Slider */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
        data-bs-interval="5000" // 5 seconds interval
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={picture} alt="Slide 1" className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="carousel-title">Expert Instructors</h5>
              <p className="carousel-text">
                Learn from industry leaders and experts.
              </p>
            </div>
          </div>
          <div className="carousel-item">
          <img src={picture2} alt="Slide 2" className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="carousel-title">Discover Opportunities</h5>
              <p className="carousel-text">
                Explore new skills and advance your career.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Welcome Section */}
      <div className="text-center mb-5">
        <h5
          className="display-4 text-primary"
          style={{
            fontSize: "2rem",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "700",
            letterSpacing: "1px",
          }}
        >
          Welcome to the Training Institute
        </h5>

        <p className="lead text-secondary">
          Explore our courses and start your learning journey today!
        </p>
      </div>

      {/* Courses List */}
      <div className="courses-section">
        <CourseList />
      </div>
    </div>
  );
};

export default HomePage;
