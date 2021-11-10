import styled from "styled-components";

export const UserStyle = styled.div`
  #section {
    width: 70%;
    height: 100%;
    margin-top: 3%;
    .box-profile {
      display: flex;
      align-items: flex-start;
      background: #fff;
      border: 1px solid #d4d5d7;
      border-radius: 10px;
      height: 190px;
      img {
        border-radius: 10px;
        width: 170px;
        height: 170px;
        object-fit: cover;
        margin: 10px;
        border: 1px solid #d4d5d7;
      }

      .user {
        display: flex;
        flex-direction: column;

        b,
        small {
          margin: 5px 5px;
        }
      }
    }
  }
`;
