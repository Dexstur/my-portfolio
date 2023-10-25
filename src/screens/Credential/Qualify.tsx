import { Wrapper, Title, QualList, QualItem, Part } from "./Qualify.style";

function Qualify() {
  return (
    <Wrapper>
      <Title>Qualifications</Title>
      <QualList>
        <QualItem>
          <Part>Mechanical Enginering BEng</Part>
          <Part style={{ textAlign: "right" }}>University of Debrecen</Part>
        </QualItem>
        <QualItem>
          <Part>Web Design</Part>
          <Part style={{ textAlign: "right" }}>
            Complete Computers and Technologies
          </Part>
        </QualItem>
        <QualItem>
          <Part>Web Development</Part>
          <Part style={{ textAlign: "right" }}>
            Decagon (Associate software developer)
          </Part>
        </QualItem>
        <QualItem>
          <Part>For more details</Part>
          <a
            href="/ISICHEI_CHUKWUKA_CV.pdf"
            target="_blank"
            className="btn btn-primary"
          >
            View CV
          </a>
        </QualItem>
      </QualList>
    </Wrapper>
  );
}

export default Qualify;
