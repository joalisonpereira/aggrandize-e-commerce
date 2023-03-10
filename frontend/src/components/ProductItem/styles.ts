import styled, { css } from "styled-components";

export interface ContainerProps {
  isFavorited: boolean;
}

export const METRICS = { width: 260, height: 400 };

export const Container = styled.div<ContainerProps>`
  width: ${METRICS.width}px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: all ${(props) => props.theme.metrics.baseTransition}s;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  :hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  img {
    object-fit: cover;
  }
  button.star {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: 1px solid #f0f0f0;
    position: absolute;
    top: ${(props) => props.theme.metrics.safeMargin * 2}px;
    right: ${(props) => props.theme.metrics.safeMargin * 2}px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 30px;
      transition: all ${(props) => props.theme.metrics.baseTransition}s;
    }
    :hover svg {
      color: gold;
    }

    ${(props) =>
      props.isFavorited &&
      css`
        color: gold;
      `};
  }
  .legend {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.text};
    h3,
    p {
      margin: 0;
      padding: 0;
    }
    h3 {
      font-size: 1.3rem;
      font-weight: 500;
      margin-top: ${(props) => props.theme.metrics.safeMargin * 2}px;
    }
    .original {
      margin-top: ${(props) => props.theme.metrics.safeMargin}px;
      text-decoration: line-through;
    }
    .discount {
      margin-top: ${(props) => props.theme.metrics.safeMargin}px;
      margin-bottom: ${(props) => props.theme.metrics.safeMargin * 2}px;
      span {
        font-weight: 600;
        font-size: 120%;
      }
    }
  }
`;
