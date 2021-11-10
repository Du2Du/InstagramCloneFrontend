import React from "react";
import { Header } from "../Layout/Components/Header";
import { Section } from "./components/Section";
import { UserStyle } from "./styles";

export const User: React.FC = () => {
  return (
    <UserStyle>
      <Header />
      <Section />
    </UserStyle>
  );
};
