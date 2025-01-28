import { Link } from "react-router-dom";
import React from "react";
import Banner from "./Banner";
import Features from "./Features";

function LandingPage() {
  return (
    <div>
      <header className="landing-header landing__wrapper">
        <img className="landing-header__logo" src="./logo.png" alt="logo" />
      </header>
      <div className="hero">
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <h1 className="hero__title">Simplify Your Life with TaskMaster</h1>
          <p className="hero__desc">
            The intelligent to-do list that helps you stay organized, focused,
            and productive. Never miss a deadline again.
          </p>
          <div className="hero__buttons">
            <Link to="/app">
              <button className="button-get-started">Get Started Free</button>
            </Link>
          </div>
        </div>
      </div>
      <Banner />

      <Features />

      <footer className="landing-footer">
        <p className="">© 2025 TaskMaster. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
