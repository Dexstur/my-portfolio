import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1640px;
`;

export const Title = styled.h2`
  padding: 10px;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: underline;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const Box = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const NonBulletList = styled.ul`
  list-style: none;
  text-align: left;
`;

export const ToggleLi = styled.li<{ show: boolean }>`
  display: ${(props) => (props.show ? "flex" : "none")};
  padding: 8px 4px;
  gap: 12px;
  width: 240px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const ToggleList = styled.button`
  outline: none;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  padding: 8px 16px;
`;

export const SWrap = styled.div`
  display: flex;
  padding: 8px;
  width: 100%;
  gap: 24px;
`;
