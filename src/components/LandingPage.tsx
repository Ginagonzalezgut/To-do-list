import  { Link } from "react-router-dom";
import React from "react";

function LandingPage() {
  return (
    <div>
      <header className="landing-header landing__wrapper">
        <img className="landing-header__logo" src="./logo.png" alt="logo" />
      </header>
      <div className="hero">
        <h2 className="hero__intro">To-do list</h2>
        <h1 className="hero__title">Simplify Your Life with TaskMaster</h1>
        <p className="hero__desc">
          The intelligent to-do list that helps you stay organized, focused, and
          productive. Never miss a deadline again.
        </p>
        <div className="hero__buttons">
          <Link to="/app">
            <button className="button-get-started">Get Started Free</button>
          </Link>
        </div>
      </div>

      <section className="preview">
        <div className="landing__wrapper">
          <div className="preview-box">
            <img
              className="preview-image"
              src="./screenshot-app.png"
              alt="page"
            />
          </div>
          <div className="preview-text">
            <h1 className="preview-title">
              Creating to-do lists is quick and easy
            </h1>
            <p className="preview-desc">
              Allowing you to manage everything you need to get done in just a
              few clicks.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="landing__wrapper">
          <div className="container__info">
            <h2 className="container__title">Why Choose TaskMaster?</h2>
            <p className="container__desc">
              Join thousands of productive users who trust TaskMaster to
              organize their daily lives.
            </p>
          </div>
          <ul className="features">
            <li className="feature">
              <i className="feature__icon fa-regular fa-circle-check"></i>
              <span className="feature__desc">Smart Organization</span>
            </li>
            <li className="feature">
              <i className="feature__icon fa-solid fa-mobile-screen-button"></i>
              <span className="feature__desc">Cross-Platform Sync</span>
            </li>
            <li className="feature">
              <i className=" feature__icon fa-regular fa-clock"></i>
              <span className="feature__desc">Time Management</span>
            </li>
          </ul>
        </div>
      </section>

      <footer className="landing-footer">
        <p className="">© 2025 TaskMaster. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
