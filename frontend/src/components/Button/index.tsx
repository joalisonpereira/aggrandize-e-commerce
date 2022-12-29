import React from "react";
import { Container, ContainerProps } from "./styles";

export interface ButtonProps
  extends ContainerProps,
    React.HtmlHTMLAttributes<HTMLButtonElement> {}

function Button(props: ButtonProps) {
  return <Container {...props} />;
}

export default Button;
