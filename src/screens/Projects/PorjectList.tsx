import projects from "./Projects";
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  margin: 12px auto;
  max-width: 1280px;
`;

const Title = styled.h2`
  padding: 12px;
  font-size: 1.5rem;
  text-align: center;
`;

const UniformCardBody = styled.div`
  height: auto;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 160px;
  }
`;

function ProjectList() {
  return (
    <Wrapper>
      <Title>Projects</Title>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-12 col-md-6 p-2" key={index}>
            <div className="card">
              <img src={project.image} className="card-img-top" alt="no_img" />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <UniformCardBody className="card-text">
                  {project.description}
                </UniformCardBody>
                <div style={{ textAlign: "center", padding: "12px 0" }}>
                  <a
                    href={project.link}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default ProjectList;
