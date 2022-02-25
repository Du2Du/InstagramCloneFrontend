import React, { useState } from "react";
import { Backend } from "../../Backend";
import { showError } from "../../Helpers";
import { RegistrationProps } from "../../Types";
import { RegistrationStyle } from "./styles";
import { useHistory } from "react-router";

export const Registration: React.FC = () => {
  const [userValue, setUserValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const history = useHistory();

  const changeValue = (
    ev:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setValue(ev.target.value);
  };
  const buttonRegistration = () => {
    Backend.post<RegistrationProps>("/register", {
      user: userValue,
      email: emailValue,
      password: passwordValue,
    })
      .then((res) => {
        setUserValue("");
        setEmailValue("");
        setPasswordValue("");
        localStorage.setItem("token", res.data.token);
        history.push("/");
      })
      .catch(showError);
  };

  return (
    <RegistrationStyle>
      <div className="box">
        <div className="texto">
          <h3> InstagramClone</h3>
          <h5> Tela de Cadastro</h5>
        </div>
        <div className="credenciais">
          <input
            className="informations"
            placeholder="Usuario"
            value={userValue}
            onChange={(ev) => changeValue(ev, setUserValue)}
          />
          <input
            className="informations"
            placeholder="E-mail"
            value={emailValue}
            onChange={(ev) => changeValue(ev, setEmailValue)}
          />
          <input
            className="informations"
            placeholder="Senha"
            type="password"
            value={passwordValue}
            onChange={(ev) => changeValue(ev, setPasswordValue)}
          />
        </div>
        <button className="btn btn-success" onClick={buttonRegistration}>
          Cadastrar
        </button>
      </div>
    </RegistrationStyle>
  );
};
