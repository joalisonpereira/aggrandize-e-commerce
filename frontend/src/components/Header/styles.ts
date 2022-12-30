import styled from "styled-components";
import { css } from "styled-components";

export interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.header<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.basic};
  z-index: 999;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > div {
    width: 100%;
    height: ${(props) => props.theme.metrics.headerHeight}px;
    display: flex;
    align-items: center;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
    text-align: center;
    a {
      color: ${(props) => props.theme.colors.text};
      text-decoration: none;
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${(props) => props.theme.colors.basic};
  }
  nav {
    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      margin-left: ${(props) => props.theme.metrics.safeMargin * 7}px;
      li {
        margin-left: ${(props) => props.theme.metrics.safeMargin * 4}px;
        display: flex;
        justify-content: center;
        :nth-child(1) {
          margin-left: 0;
        }
        a {
          text-decoration: none;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 1rem;
          color: ${(props) => props.theme.colors.text};
          transition: all ${(props) => props.theme.metrics.baseTransition}s;
          :hover {
            color: ${(props) => props.theme.colors.primary};
          }
        }
      }
    }
  }
  .social-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin-left: ${(props) => props.theme.metrics.safeMargin * 2}px;
      :nth-child(1) {
        margin-left: 0;
      }
      a {
        border: 1px solid #cccccc;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        svg {
          color: ${(props) => props.theme.colors.text};
          transition: all ${(props) => props.theme.metrics.baseTransition}s;
          font-size: 14px;
        }
        :hover svg {
          color: ${(props) => props.theme.colors.primary};
        }
      }
    }
  }

  @media (min-width: ${(props) => props.theme.metrics.lg}px) {
    button {
      display: none;
    }
  }

  @media (max-width: ${(props) => props.theme.metrics.lg}px) {
    .container {
      display: flex;
      justify-content: space-between;
      > button {
        z-index: 999;
        border: none;
        background-color: transparent;
        svg {
          font-size: 30px;
        }
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      width: 100vw;
      transition: all 0.5s;
      overflow: hidden;
      height: 100vh;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      ${(props) =>
        !props.isOpen &&
        css`
          width: 0;
          opacity: 0.5;
        `}
      nav ul {
        display: block;
        margin: 0;
        margin-top: ${(props) => props.theme.metrics.safeMargin * 3}px;
        li {
          margin: 0;
          height: 70px;
          display: flex;
          align-items: center;
          a {
            font-size: 2rem;
          }
        }
      }

      .social-links {
        margin-bottom: ${(props) => props.theme.metrics.safeMargin * 3}px;
      }
    }
  }
`;
