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

export const SubTitle = styled.h2`
  padding: 10px;
  font-size: 1rem;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Profile = styled.a`
  text-decoration: none;
  display: flex;
  margin: 8px 0;
  gap: 12px;
  font-size: 14px;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
