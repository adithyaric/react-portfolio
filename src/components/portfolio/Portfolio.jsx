import React from "react";
import "./portfolio.css";
import P1 from "../../assets/portfolio1.jpg";
import P2 from "../../assets/portfolio2.jpg";
import P3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: P1,
    title: "Judul 1",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 2,
    image: P2,
    title: "Judul 2",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 3,
    image: P3,
    title: "Judul 3",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
