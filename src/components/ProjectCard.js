import React from "react";

const Tags = ({ tags = [] }) => {
  if (!tags.length) {
    return null;
  }

  return tags.map((t) => {
    return (
      <span className="tag mx-1" key={t}>
        {t}
      </span>
    );
  });
};
const ProjectCard = ({
  title,
  subtitle,
  details,
  github,
  url = null,
  tags,
}) => {
  console.log(tags);
  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-content">
          <p className="title is-5 has-text-centered">{title}</p>
        </div>
        <div className="card-content ">
          <p className="subtitle is-6">
            <strong>{subtitle}</strong> <br />
            {details}
          </p>
          <div>
            <Tags tags={tags} />
          </div>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              View on
              <a href={github}> Github</a>
            </span>
          </p>
          {url ? (
            <p className="card-footer-item">
              <span>
                View
                <a target="_blank" rel="noopener noreferrer" href={url}>
                  {" "}
                  Live App
                </a>
              </span>
            </p>
          ) : null}
        </footer>
      </div>
    </div>
  );
};

export default ProjectCard;
