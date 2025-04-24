import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import React from "react";
import { FaBriefcase } from "react-icons/fa";

function HeaderComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold text-primary" href="/">
          JOB-ME <FaBriefcase className="ms-1" />
        </a>

        {/* Toggler Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active text-primary fw-semibold" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Jobs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Companies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>

          <SignedOut>
            <SignInButton>
              <button className="btn btn-primary">Login</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* User Profile / Login */}
          {/* <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              <FaUser className="me-1" /> Profile
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  <FaUser className="me-2" /> My Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <FaBriefcase className="me-2" /> My Jobs
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                
                <a className="dropdown-item text-danger" href="#">
                  <FaSignInAlt className="me-2" /> Logout
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default HeaderComponent;
