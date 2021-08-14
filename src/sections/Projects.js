import React from "react";
import ProjectCard from "../components/ProjectCard";
import METADATA from "../data/metadata";
import PROJECTS from "../data/projects";

const Projects = () => {
  if (!PROJECTS.length) {
    return null;
  }
  return (
    <div className="section pb-6">
      <h2 className="title is-4 has-text-centered">
        {METADATA.PROJECTS_TITLE}
      </h2>
      <div className="columns is-multiline">
        {PROJECTS.map((p) => (
          <ProjectCard {...p} key={p.title} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
