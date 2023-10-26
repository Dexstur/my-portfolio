import projects from "./Projects";
import { styled } from "styled-components";
import { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
`;

const SpanWrap = styled.span`
  font-size: 2rem;
  cursor: pointer;
  background-color: #000;
  border-radius: 50%;
  opacity: 0.8;
  width: 54px;
  height: 54px;
  text-align: center;
`;

const projectItems = projects
  .filter((project) => project.image)
  .map((project) => ({
    image: project.image,
    link: project.link,
  }));

function Slides() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Wrapper>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {projectItems.map((projectItem, index) => (
            <div
              className={
                activeIndex === index ? "carousel-item active" : "carousel-item"
              }
              key={index}
            >
              <img
                src={projectItem.image}
                className="d-block w-100"
                alt="..."
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          onClick={() => {
            setActiveIndex(activeIndex - 1);
          }}
        >
          <SpanWrap>
            <GrPrevious
              size={48}
              color="#fff"
              className="carousel-control-prev-icon"
            />
          </SpanWrap>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          onClick={() => {
            setActiveIndex(activeIndex + 1);
          }}
        >
          <SpanWrap>
            <GrNext
              size={48}
              color="#fff"
              className="carousel-control-next-icon"
            />
          </SpanWrap>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Wrapper>
  );
}

export default Slides;
