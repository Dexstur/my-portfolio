import {
  Cover,
  Container,
  HeroImg,
  ProfileContainer,
  ProfileImg,
  HeroBody,
  Details,
} from "./Hero.style";
import bgImage from "/comp-2.jpeg";

function Hero() {
  return (
    <Cover>
      <Container style={{ backgroundColor: "#fff" }}>
        <HeroImg bg={bgImage} />
        <ProfileContainer>
          <ProfileImg src={bgImage} alt="reload img" />
        </ProfileContainer>
        <HeroBody>
          <Details>
            <h1>Chukwuka Isichei</h1>
            <h3>Full Stack Developer</h3>
          </Details>
          <div>
            <p>
              Hello there! I'm a full stack developer, and this is where my
              digital journey unfolds. I'm here to turn ideas into immersive web
              experiences, blending innovation with technology. My work is a
              fusion of creativity and functionality,with the aim of delivering
              efficient and optimized solutions, I can't wait to share it with
              you.
            </p>
            <p>
              Whether you're a fellow developer looking to collaborate or an
              employer seeking a tech-savvy problem solver, let's connect and
              create something extraordinary. Explore my portfolio to see what I
              can bring to the table.
            </p>
          </div>
        </HeroBody>
      </Container>
    </Cover>
  );
}

export default Hero;
