import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1640px;
  padding: 20px;
`;

export const Title = styled.h2`
  padding: 10px;
  text-align: center;
  font-size: 1.5rem;
`;

export const QualList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 640px;
  margin: 0 auto;
  gap: 24px;
`;

export const QualItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

export const Part = styled.div`
  width: 44%;
`;
