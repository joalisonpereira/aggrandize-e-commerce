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
      <footer>Copyright © 2022 Todos os direitos reservados</footer>
    </Container>
  );
}

export default Layout;
