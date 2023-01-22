import React from 'react';
import './HomePage.css';
import headshot from '../assets/me-pretzel-beer.jpg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import gitlab from '../assets/gitlab.svg';

function HomePage() {

  return (
    <div className="HomePage">
      <header className="HomePage-items">
      <img src={headshot} className="HomePage-headshot"/>
        <p>
          Stephanie Tran
        </p>
        <div>
          <a href="https://linkedin.com/in/stephctran" target="_blank" rel="noreferrer">
            <img src={linkedin} className="HomePage-linkedin"/>
          </a>
          <a href="https://github.com/stephoknees" target="_blank" rel="noreferrer">
            <img src={github} className="HomePage-github"/>
          </a>
          <a href="https://gitlab.com/users/stephoknees/starred" target="_blank" rel="noreferrer">
            <img src={gitlab} className="HomePage-gitlab"/>
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
