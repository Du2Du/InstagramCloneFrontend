import React from "react";
import Logo from "../../../../../../assets/Profile.jpg";
export const Info: React.FC = () => {
  return (
    <div id="info">
      <div className="eu">
        <img src={Logo} />
        <div className="name">
          <p>eduardoaraujo089</p>
          <small>Eduardo Hilario</small>
        </div>
        <a href="#">Mudar</a>
      </div>
      {/* <div className="sugestao">
        <div className="st">
          <p>Sugestões para você</p>
          <strong>Ver Tudo</strong>
        </div>
      </div> */}
    </div>
  );
};
