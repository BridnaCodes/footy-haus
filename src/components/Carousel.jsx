/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import image_1 from "../images/img-1.jpg";
import image_3 from "../images/img-3.jpg";
import image_4 from "../images/img-4.jpg";
import image_5 from "../images/img-5.jpg";
import image_6 from "../images/img-6.png";
import image_7 from "../images/img-7.jpg";

const Carousel = () => {
  return (
    <>
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>

        </div>
        <div class="carousel-inner">
          {/* carousel item */}
          <div class="carousel-item active">
            <img src={image_1} alt="Footy-haus" class="d-block w-100 rounded" />
            <div class="container">
              <div class="carousel-caption text-start">
                <h1> Footy Haus </h1>
                <p>We are the best at what we do!</p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* carousel item */}
          <div class="carousel-item">
            <img src={image_3} alt="Footy-haus" class="d-block w-100 rounded" />
            <div class="container">
              <div class="carousel-caption text-end">
                <h1>Excellence</h1>
                <p>Swim in a Pristine Pool of Eliteness.</p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* carousel item */}
          <div class="carousel-item">
            <img src={image_4} alt="Footy-haus" class="d-block w-100 rounded" />
            <div class="container">
              <div class="carousel-caption text-start">
                <h1> Footy Haus </h1>
                <p>We are the best at what we do!</p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* carousel item */}
          <div class="carousel-item">
            <img src={image_5} alt="Footy-haus" class="d-block w-100 rounded" />
            <div class="container">
              <div class="carousel-caption">
                <h1>Beauty as a Personality.</h1>
                <p>Partner with Us.</p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Click to get started
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* carousel item */}
          <div class="carousel-item">
            <img src={image_6} alt="Footy-haus" class="d-block w-100 rounded" />
            <div class="container">
              <div class="carousel-caption text-end">
                <h1>Excellence</h1>
                <p>Swim in a Pristine Pool of Eliteness.</p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* carousel item */}
          <div class="carousel-item">
            <img src={image_7} alt="Footy-haus" class="d-block w-100 rounded" />
            <div class="container">
              <div class="carousel-caption text-start">
                <h1> Footy Haus </h1>
                <p>We are the best at what we do!</p>
                <p>
                  <a class="btn btn-lg btn-primary" href="#">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
