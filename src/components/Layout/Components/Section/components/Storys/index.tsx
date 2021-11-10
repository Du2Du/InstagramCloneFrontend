import React from "react";
import { api } from "../../../../../../services/api";

export const Storys: React.FC = () => {
  const story = api;
  return (
    <div id="box-story">
      {story?.StoryInfo.map((user) => (
        <div className="userStory">
          <img src={user.url} />
          <div id="StoryName" className="text-truncate">
            {user.name}
          </div>
        </div>
      ))}
    </div>
  );
};
