import { styled } from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  max-width: 1640px;
  flex-direction: column;
  height: 80px;
  position: absolute;
  bottom: 0;
  justify-content: center;
  padding: 12px;
  gap: 12px;
  text-align: center;
  z-index: 300;
  border-top: 1px solid #ccc;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 24px;
    height: 60px;
  }
`;

const Left = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;
const Right = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: right;
  }
`;

function Footer() {
  return (
    <Wrapper className="bg-base">
      <Left>Chukwuka Isichei &copy;{new Date().getFullYear()}</Left>
      <Right>Powered by Vite</Right>
    </Wrapper>
  );
}

export default Footer;
