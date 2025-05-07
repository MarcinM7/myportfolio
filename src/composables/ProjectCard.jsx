import React from 'react';
import './ProjectCard.css';

export default function ProjectCard() {
  return (
    <div className="ProjectCard-wrapper">
      <section className="ProjectCard">
        <div className="logo-container">
          <img src="./src/assets/react-logo.png" alt="Logo React" className="project-logo" />
        </div>
        <article className="project-description">
          Zanurz się w ekosystemie React! Tutaj znajdziesz moje najbardziej dynamiczne projekty
          wykorzystujące najpopularniejszy framework frontendowy.
          Od zaawansowanych aplikacji SPA po progresywne aplikacje webowe – każda implementacja 
          demonstruje potencjał komponentowego podejścia React do budowania interaktywnych interfejsów przyszłości.
        </article>
      </section>
      
      <div className="github-link-bar">
        <a href="https://github.com/MarcinM7/react-project" target="_blank" rel="noopener noreferrer">
          Zobacz kod na GitHub <i className="github-icon">🔗</i>
        </a>
      </div>
    </div>
  );
}