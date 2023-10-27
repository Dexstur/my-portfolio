import { Container, SubTitle, Wrapper, Profile } from "./Contact.style";
import { styled } from "styled-components";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Box = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

function Contact() {
  return (
    <Container>
      <Wrapper>
        <Box style={{ backgroundColor: "#fffefe" }}>
          <SubTitle>Contact Me</SubTitle>
          <div style={{ width: "320px", margin: "0 auto", padding: "12px" }}>
            <Profile href="mailto:chuks89@live.com">
              <HiMail />
              <span>chuks89@live.com</span>
            </Profile>
            <Profile href="https://github.com/Dexstur" target="_blank">
              <FaGithub color="purple" />
              <span>Dexstur</span>
            </Profile>
            <Profile
              href="https://www.linkedin.com/in/chukwuka-isichei-b2b062173?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
            >
              <FaLinkedin />
              <span>Chukwuka Isichei</span>
            </Profile>
            <Profile
              href="https://api.whatsapp.com/send?phone=2348099157011"
              target="_blank"
            >
              <FaWhatsapp color="green" />
              <span>Direct message</span>
            </Profile>
          </div>
        </Box>
        <Box className="bg-alt">
          <SubTitle>Credentials</SubTitle>
          <div style={{ padding: "12px" }}>
            <div>
              <p>Mechanical Engineering BEng</p>
            </div>
            <div>
              <p>Web Design</p>
            </div>
            <div>
              <p>Web Development</p>
            </div>
          </div>
        </Box>
      </Wrapper>
    </Container>
  );
}

export default Contact;
