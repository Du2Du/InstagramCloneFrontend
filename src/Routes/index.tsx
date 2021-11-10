import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Profile } from "../components/Profile";
import { ProfileSearch } from "../components/ProfileSearch";
import { User } from "../components/User";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={Layout} path="/" exact />
      <Route component={ProfileSearch} path="/pesquisar" />
      <Route component={Profile} path="/profile" />
      <Route component={User} path="/user" />
    </BrowserRouter>
  );
};
