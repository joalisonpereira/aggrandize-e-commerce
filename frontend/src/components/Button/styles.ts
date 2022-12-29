import styled from "styled-components";

export interface ContainerProps {}

export const Container = styled.button<ContainerProps>`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.basic};
  border: none;
  width: 160px;
  height: 50px;
  transition: all 0.3s;
  border-radius: ${(props) => props.theme.metrics.safeMargin / 2}px;
  font-weight: 600;
  :hover {
    filter: brightness(90%);
  }
`;
