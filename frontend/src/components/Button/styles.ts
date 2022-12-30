import styled, { css } from "styled-components";

export interface ContainerProps {}

export const ButtonStyle = css`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.basic};
  border: none;
  width: 160px;
  height: 50px;
  transition: all ${(props) => props.theme.metrics.baseTransition}s;
  border-radius: ${(props) => props.theme.metrics.safeMargin / 2}px;
  font-weight: 600;
  :hover {
    filter: brightness(90%);
  }
`;

export const Container = styled.button<ContainerProps>`
  ${ButtonStyle};
`;
