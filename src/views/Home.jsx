import React from "react";
import "../stylesheets/home.css";
import logo from "../assets/zupple_logo.jpeg";
import ScreenCard from "../components/ScreenCard";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="page__wrapper">
        <div className="home__container">
          <header className="home__header">
            <img src={logo} alt="Zupple Logo" />
            <h2>Front-End Engineering Intern<br/>Take-Home Assessment</h2>
          </header>
          <main className="screen__card__container">
            <NavLink to='screen1' className='reset__navlink'>
              <ScreenCard
                screenName = 'Screen 1' 
                screenDesc = 'Form Submission and Validation'
              />
            </NavLink>
            <NavLink to='screen2' className='reset__navlink'>
              <ScreenCard
                screenName = 'Screen 2' 
                screenDesc = 'Blockchain Explorer'
              />
            </NavLink>
          </main>
          <footer className="home__footer">
            <p>Submitted By : Rohit Kumar</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
