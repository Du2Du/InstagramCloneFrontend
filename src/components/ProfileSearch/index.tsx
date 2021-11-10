import React, { useState } from "react";
import { Header } from "../Layout/Components/Header";
import { Section } from "./components/Section";
import { ProfileSearchStyle } from "./styles";

export const ProfileSearch: React.FC = () => {
  return (
    <ProfileSearchStyle>
      <Header />
      <Section />
    </ProfileSearchStyle>
  );
};
