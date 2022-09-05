import React, { useContext } from 'react';
import Context from '../context/Context';
import closeIcon from '../images/closeIcon.svg';

function About() {
  const { showAbout, setShowAbout, lightMode } = useContext(Context);
  return (
    <div className={`about ${lightMode}-about ${showAbout ? '' : 'hidden'}`}>
      <header className="about-header">
        <h1>Hello there. 😄</h1>
        <button
          type="button"
          className="close-button"
          onClick={() => setShowAbout(!showAbout)}
        >
          <img src={closeIcon} alt="Close icon" />
        </button>
      </header>
      <p>
        This is just a project that I developed to practice React, ContextApi
        and programming logic.
      </p>
      <p>I hope you found this mini project interesting. 😊</p>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/celso-rodrigo-monteiro-de-assis-419a371aa/"
          target="_blank"
        >
          <img
            src="https://www.linkedin.com/in/celso-rodrigo-monteiro/"
            alt="LinkedIn redirect button."
          />
        </a>
        <a href="https://github.com/celso-rodrigo" target="_blank">
          <img
            src="https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github"
            alt="Github redirect button."
          />
        </a>
      </div>
    </div>
  );
}

export default About;
