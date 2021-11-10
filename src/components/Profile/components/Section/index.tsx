import React from "react";
import { useLocation } from "react-router";
import { api } from "../../../../services/api";

export const Section: React.FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const userBox = api;

  const querySearch = query.get("profile");
  const profile = userBox.StoryInfo.find((user) => querySearch === user.name);

  return (
    <div className="container" id="section">
      <div className="box-profile">
        <img src={profile?.url} alt="foto" />

        <div className="user">
          <b>{profile?.name}</b>
          <small>{profile?.bio}</small>
        </div>
      </div>
    </div>
  );
};
