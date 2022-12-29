import React from "react";
import Header from "../Header";
import { Container, ContainerProps } from "./styles";

export interface LayoutProps extends ContainerProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

export default Layout;
