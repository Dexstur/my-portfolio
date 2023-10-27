import {
  Container,
  Wrapper,
  Box,
  NonBulletList,
  ToggleList,
  ToggleLi,
  SWrap,
} from "./Skills.style";
import { styled, keyframes } from "styled-components";
import { ReactNode, useState, useEffect } from "react";
import {
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTestcafe,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiApollographql,
  SiCsharp,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const Mid = styled.div`
  text-align: center;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 24px 40px;
  }
`;

const Skill = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  min-height: 100%;

  @media (min-width: 768px) {
    padding: 24px 40px;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinIcon = styled(FaReact)`
  animation: ${spin} 2s linear infinite;
  cursor: pointer;
`;

interface StyledItemProps {
  children: ReactNode;
  iconColor?: string;
  onClick?: () => void;
}

function StyledItem({
  children,
  iconColor = "blue",
  onClick = () => null,
}: StyledItemProps) {
  return (
    <SWrap onClick={onClick}>
      <div>
        <SpinIcon color={iconColor} size={20} />
      </div>
      <div>{children}</div>
    </SWrap>
  );
}

const mySkills = [
  "Crafting captivating frontend applications with Vite, React, and Typescript, ensuring a delightful user experience.",
  "Developing robust, secure, and high-performing RESTful APIs using Node.js, Express, and Typescript.",
  "Expertly managing and versioning code with Git, ensuring the scalability and maintainability of applications.",
  "Designing and implementing scalable, secure, and efficient databases with proficiency in MongoDB and MySQL.",
  "Thoroughly testing Node.js applications using Jest and Supertest to guarantee reliability and performance.",
  "Proficiently containerizing applications with Docker to ensure consistent and seamless performance and integration across diverse environments.",
  "Enhancing user experiences through responsive web design, accessibility standards, and cross-browser compatibility.",
  "Troubleshooting, debugging, and resolving complex technical issues for seamless application performance.",
];

function Skills() {
  const technologies = [
    { icon: <FaNodeJs size={20} color="green" />, name: "Node.js" },
    { icon: <FaReact size={20} color="blue" />, name: "React" },
    { icon: <FaGitAlt size={20} color="orange" />, name: "Git" },
    { icon: <FaDocker size={20} color="blue" />, name: "Docker" },
    { icon: <SiTestcafe size={20} color="green" />, name: "Jest" },
    { icon: <SiTypescript size={20} color="blue" />, name: "Typescript" },
    { icon: <FaNodeJs size={20} color="green" />, name: "Express" },
    { icon: <FaHtml5 size={20} color="orange" />, name: "HTML5" },
    { icon: <FaCss3Alt size={20} color="blue" />, name: "CSS3" },
    { icon: <SiJavascript size={20} color="yellow" />, name: "Javascript" },
    { icon: <SiMongodb size={20} color="green" />, name: "MongoDB" },
    { icon: <SiMysql size={20} color="blue" />, name: "MySQL" },
    { icon: <TbApi size={20} color="red" />, name: "REST API" },
    { icon: <SiApollographql size={20} color="blue" />, name: "GraphQL" },
    { icon: <SiCsharp size={20} color="blue" />, name: "C#" },
  ];

  const [maxItems, setMaxItems] = useState(5);
  const [techToggle, seeTechToggle] = useState(true);
  const [selectSkill, setSelectSkill] = useState(-1);

  useEffect(() => {
    const handleResize = () => {
      // Check the screen width
      if (window.innerWidth >= 768) {
        setMaxItems(technologies.length);
        seeTechToggle(false);
      } else {
        setMaxItems(5);
        seeTechToggle(true);
      }
    };

    // Add an event listener to check and update maxItems on window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize immediately to set the initial maxItems value
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [technologies.length]);

  function showItems() {
    maxItems === 5 ? setMaxItems(technologies.length) : setMaxItems(5);
  }

  function targetSkill(index: number) {
    selectSkill === index ? setSelectSkill(-1) : setSelectSkill(index);
  }
  return (
    <Container>
      <Wrapper>
        <Box style={{ backgroundColor: "#fffefe" }}>
          <Mid>
            <h3 style={{ fontSize: "1rem" }}>Technologies</h3>
            <NonBulletList>
              {technologies.map((tech, index) => (
                <ToggleLi show={index < maxItems} key={tech.name}>
                  {tech.icon}
                  <span>{tech.name}</span>
                </ToggleLi>
              ))}
            </NonBulletList>
            {techToggle ? (
              <ToggleList
                onClick={showItems}
                className={`btn  ${
                  maxItems === 5 ? "btn-success" : "btn-danger"
                }`}
              >
                {maxItems === 5 ? "Show More" : "Show Less"}
              </ToggleList>
            ) : null}
          </Mid>
        </Box>
        <Box className="bg-alt">
          <Skill>
            <h3 style={{ fontSize: "1rem", textAlign: "center" }}>Skills</h3>
            {mySkills.map((skill, index) => (
              <StyledItem
                key={index}
                iconColor={selectSkill === index ? "green" : "blue"}
                onClick={() => targetSkill(index)}
              >
                <p>{skill}</p>
              </StyledItem>
            ))}
          </Skill>
        </Box>
      </Wrapper>
    </Container>
  );
}

export default Skills;
