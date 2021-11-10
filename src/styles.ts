import styled from "styled-components";

export const Style = styled.div`
  .profilePictures {
    border-radius: 50%;
  }
  header {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #d4d5d7;
    padding: 15px;
  }
  #top {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .input {
      text-align: center;
      outline: none;
      width: 23%;
      display: flex;
      border: 1px solid #d4d5d7;
      border-radius: 4px;
      background: rgb(250, 250, 250);
      align-items: center;
      button {
        cursor: text;
      }

      button,
      #search {
        border: 0;
        width: 100%;
        color: rgb(142, 142, 142);
        align-items: center;
        outline: none;
        padding: 3px 0;
        background: rgb(250, 250, 250);
      }

      #search {
        padding: 3px 20px;
      }
    }
    #options {
      align-items: center;
      display: flex;
      justify-content: space-between;
      width: 25%;
      img {
        cursor: pointer;
      }
      svg {
        cursor: pointer;
        margin: 0 6px;
      }
    }
  }
`;
