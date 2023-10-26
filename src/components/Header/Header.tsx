import { styled } from "styled-components";
import HLink from "../reuse/HLink";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  z-index: 500;

  @media (min-width: 1640px) {
    width: 1640px;
  }
`;

const NavToggle = styled.button`
  border: 1px solid #000;
  display: flex;
  place-items: center;
  border-radius: 8px;
  padding: 5px;
  margin: 0 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavMenu = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: fixed;
  top: 60px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  left: 0;
  gap: 12px;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    display: flex;
    position: static;
    padding-left: 50px;
    flex-direction: row;
    height: 60px;
    gap: 8px;
    align-items: center;
  }
`;
const LinkWrap = styled.span`
  color: #fff;

  &:hover {
    color: #ccc;
  }
`;

interface HeaderProps {
  mobileMenu: boolean;
  activeNav?: string;
  seeMobileMenu: () => void;
}

function Header({
  mobileMenu = false,
  seeMobileMenu,
  activeNav = "home",
}: HeaderProps) {
  const HomeActive = activeNav === "home" ? "underline" : "none";
  const CredentialActive = activeNav === "credential" ? "underline" : "none";
  const ProjectActive = activeNav === "projects" ? "underline" : "none";
  return (
    <Nav className="bg-base">
      <NavToggle onClick={seeMobileMenu} className="bg-sec">
        {mobileMenu ? <GrClose size={24} /> : <FaBars size={24} />}
      </NavToggle>
      <NavMenu show={Boolean(mobileMenu)} className="bg-base">
        <HLink to="/">
          <LinkWrap style={{ textDecoration: HomeActive }}>Home</LinkWrap>
        </HLink>
        <HLink to="/credentials">
          <LinkWrap style={{ textDecoration: CredentialActive }}>
            Credentials
          </LinkWrap>
        </HLink>
        <HLink to="/projects">
          <LinkWrap style={{ textDecoration: ProjectActive }}>
            Projects
          </LinkWrap>
        </HLink>
      </NavMenu>
    </Nav>
  );
}

export default Header;
