import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "./Carousel";

const Introduction = () => {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row justify-content-center align-items-center g-5 py-5">
          <div className="col-10 col-sm-12 col-lg-6">
            <Carousel />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Footy Haus
            </h1>
            <p className="lead">
            <p class="lead p-light">
            We take pride in our work and put in a lot of effort to ensure that
            our clients are happy by providing them with very
            quality housing and apartments at very affordable prices, that solve their
            environmental problems.
          </p>
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
