import React from "react";
import { Header } from "./Components/Header";
import { Section } from "./Components/Section";
import { LayoutStyle } from "./styles";

export const Layout: React.FC = () => {
  return (
    <LayoutStyle>
      <Header />
      <Section />
    </LayoutStyle>
  );
};
