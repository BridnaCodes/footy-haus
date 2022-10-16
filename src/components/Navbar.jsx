/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const logoStyle = {
  fontFamily: "Arial",
  borderRadius: "8px",
  fontSize: "25px",
  fontWeight: "solid",
  color: "#32AAEE",
};

const logoStyleIn = {
  fontFamily: "Arial",
  borderRadius: "8px",
  fontSize: "25px",
  fontWeight: "solid",
  color: "#829",
};

const logoStyleCover = {
    borderRadius: "8px",
    borderRight: "2px solid #32AAEE",
    borderLeft: "2px solid #829",
}

const Navbar = () => {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-1 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span style={logoStyleCover}>
              <span style={logoStyle}>Footy</span>
              <span style={logoStyleIn}>Haus</span>
            </span>
            <span className="fs-4"></span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" className="nav-link fw-normal">
                Catalog
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link fw-normal">
                About Us
              </a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Navbar;
