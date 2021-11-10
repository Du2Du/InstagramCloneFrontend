import React from "react";
import { Header } from "../Layout/Components/Header";
import { Section } from "./components/Section";
import { ProfileStyle } from "./styles";

export const Profile: React.FC = () => {
  return (
    <ProfileStyle>
      <Header />
      <Section />
    </ProfileStyle>
  );
};
