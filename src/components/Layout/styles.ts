import styled from "styled-components";

export const LayoutStyle = styled.div`
  section {
    width: 100%;
    #section {
      width: 70%;

      .col-8 {
        display: flex;
        flex-direction: column;
        margin-left: 1%;
        #box-story {
          overflow: hidden;
          display: flex;
          flex-direction: row;
          margin-top: 4%;
          background: white;
          padding: 20px;
          border: 1px solid #d4d5d7;
          border-radius: 4px;
          justify-content: space-between;
        }
        .userStory {
          cursor: pointer;
          margin: 0 10px;
          max-width: 70px;
          display: flex;
          text-overflow: ellipsis;
          justify-content: center;
          flex-direction: column;

          img {
            border-radius: 50%;
            padding: 2px;
            width: 60px;
            height: 59px;
            border: 3px solid #df11af;
            object-fit: cover;
          }
          #StoryName {
            font-size: 14px;
          }
        }

        #box-post {
          margin: 4% 0;
          border: 1px solid #d4d5d7;
          height: 800px;
          .post-top {
            border-bottom: 1px solid #d4d5d7;

            display: flex;
            flex-direction: row;
            align-items: center;
            .profile {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              border: 3px solid #df11af;
              padding: 1px;
              object-fit: cover;
            }
            p {
              margin: 0 0 0 20px;
              font-weight: 600;
              width: 90%;
            }
          }
          .post {
            width: 100%;
            object-fit: cover;
            height: 680px;
          }
          .comments {
            border-top: 1px solid #d4d5d7;
            display: flex;
            align-items: center;
            justify-content: space-between;
            svg {
              margin: auto 8px;
              cursor: pointer;
            }
          }
          .post-top,
          .comments {
            padding: 10px 20px;
            height: 60px;
          }
        }
      }
      .col-4 {
        width: 300px;

        #info {
          margin-top: 10%;
          height: 120px;
          .eu {
            margin-top: 18%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            .name {
              display: flex;
              flex-direction: column;
              align-items: center;
              p {
                margin: 0;
                padding: 0;
                font-weight: 600;
                cursor: pointer;
              }

              small {
                color: rgb(142, 142, 142);
                font-size: 16px;
                margin-right: 15%;
              }
            }
            a {
              text-decoration: none;
              font-weight: 645;
              font-size: 14px;
            }
            img {
              width: 56px;
              height: 56px;
              object-fit: cover;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
`;
