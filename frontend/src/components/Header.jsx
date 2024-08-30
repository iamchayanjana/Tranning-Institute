import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

const Header = () => {
  const location = useLocation(); // Get the current route

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <div className="container">
        <Link
          className="navbar-brand font-weight-bold"
          to="/"
          style={{
            fontSize: "2rem",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "700",
            letterSpacing: "1px",
          }}
        >
          Training Institute
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link
              className={`nav-link text-white font-weight-bold ${isActive("/") ? "active" : ""}`}
              to="/"
              style={isActive("/") ? { textDecoration: "underline" } : {}}
            >
              Home
            </Link>
            <Link
              className={`nav-link text-white font-weight-bold ${isActive("/courses") ? "active" : ""}`}
              to="/courses"
              style={isActive("/courses") ? { textDecoration: "underline" } : {}}
            >
              Courses
            </Link>
            <Link
              className={`nav-link text-white font-weight-bold ${isActive("/contact") ? "active" : ""}`}
              to="/contact"
              style={isActive("/contact") ? { textDecoration: "underline" } : {}}
            >
              Contact Us
            </Link>
            <NavDropdown 
              title={<span className="text-white font-weight-bold">Login</span>} 
              id="basic-nav-dropdown"
              className="font-weight-bold"
            >
              <Link className="dropdown-item font-weight-bold" to="/login">
                Login As a User
              </Link>
              <Link className="dropdown-item font-weight-bold" to="/adminlogin">
                Login As an Admin
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
