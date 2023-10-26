import Layout from "../../components/Layout";
import Slides from "./Carousel";
import ProjectList from "./PorjectList";
import { styled } from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: 12px auto;
  max-width: 1280px;
`;
function Project() {
  return (
    <Layout activeNav="projects">
      <Slides />
      <ProjectList />
      <br />
      <br />
      <Container>
        <span style={{ paddingRight: "24px" }}>
          This site was built using typescript react
        </span>
        <a
          href="https://github.com/Dexstur/my-portfolio"
          target="_blank"
          className="btn btn-success"
        >
          View repository
        </a>
      </Container>
    </Layout>
  );
}

export default Project;
