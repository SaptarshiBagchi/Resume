import "./Projects.css";
import data from "./data.js";

export default function Projects() {
  return (
    <div>
      {data.map((value) => {
        return <ProjectComponent key={value.name} project={value} />;
      })}
    </div>
  );
}

function ProjectComponent({ project }) {
  return (
    <div className="projectHolder">
      <p className="projectName">
        {project.link ? (
          <a href={project.link} target="_blank">
            {project.name}:
          </a>
        ) : (
          project.name
        )}
      </p>
      <p className="projectDescription">
        {project.description}
        <br></br>
        <br></br>
        <div className="features">
          Features Implemented :
          <ul>
            {project.features.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        </div>
        <div className="techStack">
          Tech-stack used :
          <ul>
            {project.techstack.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        </div>
      </p>
    </div>
  );
}
