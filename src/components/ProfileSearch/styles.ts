import styled from "styled-components";

export const ProfileSearchStyle = styled.div`
  section {
    width: 100%;
    #section {
      width: 70%;
    }
  }

  .user-box {
    margin-top: 5%;
    background: #fff;
    width: 480px;
    border: 1px solid #d4d5d7;
    height: 90px;
    display: flex;
    align-items: center;
    cursor: pointer;
    b {
      margin-left: 2%;
    }
    .profile {
      object-fit: cover;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      padding: 1px;
      margin: 10px;
    }
  }
`;
