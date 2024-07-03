/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Rock-Paper-Scissor Game Project",
    description:
      "In this game user have three choices Rock, Paper and Scissor. User will select one choice and computer will give a response of random choice from the three choices above. I created this site by using HTML, CSS and JAVA SCRIPT.",
    url: "https://wondrous-gumption-934b0f.netlify.app",
  },
  {
    title: "Toddlers-Learning-Site",
    description:
      "This site allows toddlers to learn basic alphabets along with having fun. When the user will click on the alphabets, they will hear sound of that particular alphabet. This site also has so many videos and music which can attract toddlers and can help with their retention skills. I created this site by using HTML, CSS and JAVA SCRIPT.",
    url: "https://tiny-longma-3fe21f.netlify.app/",
  },
  {
    title: "Calculator",
    description:
      "This is a simple Calculator used to calculate arithmetic calculations. I created this Calculator by using HTML, CSS and JAVA SCRIPT.",
    url: "https://clever-kashata-ab69a9.netlify.app",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
