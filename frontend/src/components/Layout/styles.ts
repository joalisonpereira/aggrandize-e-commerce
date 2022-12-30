import styled from "styled-components";

export interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  padding-top: ${(props) => props.theme.metrics.headerHeight}px;

  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${(props) => props.theme.metrics.safeMargin * 4}px;
    color: ${(props) => props.theme.colors.text};
    margin-top: ${(props) => props.theme.metrics.safeMargin * 10}px;
    text-align: center;
  }
`;
