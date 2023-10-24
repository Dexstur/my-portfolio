import { styled } from "styled-components";

export const Cover = styled.div`
  width: 100%;
  max-width: 1640px;
  padding: 20px 0 40px 0;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 90%;
  min-width: 320px;
  position: relative;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  @media (min-width: 768px) {
    max-width: 960px;
    width: 80%;
    border-radius: 12px;
  }
`;

export const HeroImg = styled.div<{ bg: string }>`
  width: 100%;
  height: 240px;
  background-image: url(${(props) => props.bg});
  background-size: 100% 100%;
  background-color: #ccc;

  @media (min-width: 768px) {
    width: 100%;
    height: 320px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  position: absolute;
  top: 200px;
  justify-content: center;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    padding-left: 40px;
    justify-content: flex-start;
    top: 260px;
    width: 100%;
  }
`;

export const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const HeroBody = styled.div`
  padding: 48px 20px 12px 20px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 64px 24px 16px 24px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
    text-align: left;
  }
`;

export const Owner = styled.h1``;
