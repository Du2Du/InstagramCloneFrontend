import React from "react";
import { Info } from "./components/Info";
import { Post } from "./components/Post";
import { Storys } from "./components/Storys";

export const Section: React.FC = () => {
  return (
    <section>
      <div className="container" id="section">
        <div className="row">
          <div className="col-8">
            <Storys />
            <Post />
          </div>
          <div className="col-4">
            <Info />
          </div>
        </div>
      </div>
    </section>
  );
};
