import styled from "styled-components";

export const RegistrationStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  .box {
    margin-top: 12%;
    border: 3px solid #d4d5d7;
    background: #eeebf1;
    padding: 50px 40px;
    height: 500px;
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .texto {
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .credenciais {
      .informations {
        outline: none;
        border: 2px solid #d4d5d7;
        width: 100%;
        margin: 10px 0;
        height: 50px;
        padding: 0 15px;
      }
    }
  }
`;
