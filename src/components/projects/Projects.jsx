import React from "react";
import "./projects.css";
import { ProjectsData } from "./Data";

const Projects = () => {
  return (
    <section className="projects section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="projects__container container grid">
        {ProjectsData.map(({ id, image, title, desc, source, tags }) => {
          return (
            <a href={source} target="_blank" rel="noreferrer">
              <div className="projects__box" key={id}>
                <div>
                  <img src={image} className="projects__icon" alt={title} />
                  <h3 className="projects__title">{title} </h3>
                  <span className="projects__subtitle">{desc}</span>
                </div>
                <hr />
                {tags.map((tag) => {
                  return (
                    <span className="projects__button">
                      <img src={tag} className="projects__button-icon" alt="" />
                    </span>
                  );
                })}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
