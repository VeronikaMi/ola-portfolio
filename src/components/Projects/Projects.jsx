import React from "react";
import "./Projects.scss";

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="main">
        <div className="project">
          <img
            src="https://i.guim.co.uk/img/media/01cd2598194e1315662236f6c3f6f81ad2d3f7f3/51_0_950_570/master/950.jpg?width=1200&quality=85&auto=format&fit=max&s=730aa9bae1b1d265c04f0f363513da45"
            alt="project"
          />
          <div className="text">
            <h3>Twitter copy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              natus harum deleniti excepturi dolorum!
            </p>
            <button type="button" className="github">
              <a
                href="https://github.com/VeronikaMi/ol-academy-imitated-twitter-posts/tree/master/twitter"
                target="_blank"
              >
                See on GitHub
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
