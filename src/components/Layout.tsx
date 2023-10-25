import { styled } from "styled-components";
import { ReactNode, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  flex-shrink: 0;
  padding-top: 80px;
  min-width: 320px;
  position: relative;
  padding-bottom: 80px;

  @media (min-width: 768px) {
    padding-bottom: 60px;
  }

  @media (min-width: 1640px) {
    margin: 0 auto;
    width: 1640px;
  }
`;

interface LayoutProps {
  children: ReactNode;
  activeNav?: string;
}

function Layout({ children, activeNav = "home" }: LayoutProps) {
  const [mobileMenu, seeMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    seeMobileMenu((prev) => !prev);
  };
  const toggleOff = () => {
    seeMobileMenu(false);
  };
  return (
    <Wrap className="bg-sec">
      <Header
        mobileMenu={mobileMenu}
        seeMobileMenu={toggleMobileMenu}
        activeNav={activeNav}
      />
      <div
        style={{ minHeight: "100vh" }}
        onClick={toggleOff}
        className="bg-sec"
      >
        {children}
      </div>
      <Footer />
    </Wrap>
  );
}

export default Layout;
