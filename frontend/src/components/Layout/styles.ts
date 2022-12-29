import styled from "styled-components";

export interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  padding-top: ${(props) => props.theme.metrics.headerHeight}px;
`;
