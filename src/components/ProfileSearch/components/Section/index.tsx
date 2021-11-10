import React from "react";
import { useHistory, useLocation } from "react-router";
import { api } from "../../../../services/api";

export const Section: React.FC = () => {
  const userBox = api;
  const query = new URLSearchParams(useLocation().search);
  const querySearch = query.get("profileSearch");
  const profile = userBox.StoryInfo.find((user) => querySearch === user.name);
  const history = useHistory();

  return (
    <section>
      <div className="container" id="section">
        {profile ? (
          <div
            className="user-box"
            onClick={() =>
              history.push("/profile" + `?profile=${profile.name}`)
            }
          >
            <img alt="profileImage" src={profile.url} className="profile" />
            <b>{profile.name}</b>
          </div>
        ) : (
          <h5>Nenhum usuário encontrado</h5>
        )}
      </div>
    </section>
  );
};
