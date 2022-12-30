import Link, { LinkProps } from "next/link";
import Button from "src/components/Button";
import styled from "styled-components";
import {
  ButtonStyle,
  Container as ButtonContainer,
} from "src/components/Button/styles";

export interface ContainerProps {}

export const Container = styled.section<ContainerProps>`
  section.hero {
    background-image: url("/roupas.jpg");
    background-repeat: no-repeat;
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
  section.products {
    margin-top: ${(props) => props.theme.metrics.safeMargin * 6}px;
    h1 {
      color: ${(props) => props.theme.colors.text};
      font-size: 3rem;
      margin-bottom: ${(props) => props.theme.metrics.safeMargin * 4}px;
      text-align: center;
      @media (max-width: ${(props) => props.theme.metrics.lg}px) {
        font-size: 3rem;
      }
    }

    .row > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const HeroButton = styled(Link)<LinkProps>`
  ${ButtonStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.basic};
  text-decoration: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  :hover {
    color: ${(props) => props.theme.colors.basic};
  }
`;
