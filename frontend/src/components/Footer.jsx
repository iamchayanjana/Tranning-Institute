import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-5">
      <div className="container py-4">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              We offer a variety of professional training courses to help you enhance your skills and advance your career.
              Kolkata,West Bengal,700150
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3 ">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/courses" className="text-white">Courses</Link></li>
              <li><Link to="/contact" className="text-white">Contact Us</Link></li>
              <li><Link to="/login" className="text-white">Login</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <a href="https://www.facebook.com" className="text-white me-3"><i className="fab fa-facebook fa-lg"></i></a>
            <a href="https://www.twitter.com" className="text-white me-3"><i className="fab fa-twitter fa-lg"></i></a>
            <a href="https://www.linkedin.com" className="text-white me-3"><i className="fab fa-linkedin fa-lg"></i></a>
            <a href="https://www.instagram.com" className="text-white"><i className="fab fa-instagram fa-lg"></i></a>
          </div>
        </div>
      </div>
      <div className="bg-dark text-white text-center py-2">
        <p className="mb-0">&copy; {new Date().getFullYear()} Training Institute. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
