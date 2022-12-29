import styled from "styled-components";

export interface ContainerProps {}

export const Container = styled.section<ContainerProps>`
  section {
    background-image: url("/roupas.jpg");
    width: 100%;
    min-height: 800px;
    position: relative;
    .centered {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      h1 {
        color: ${(props) => props.theme.colors.basic};
        font-size: 5rem;
        margin-bottom: ${(props) => props.theme.metrics.safeMargin * 4}px;
        @media (max-width: ${(props) => props.theme.metrics.lg}px) {
          font-size: 3rem;
        }
      }
    }
    .overlay {
      width: 100%;
      min-height: 800px;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;
