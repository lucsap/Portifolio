import styled from "styled-components";

export const Header = styled.header`
  margin: 0px;
  padding: 0px;
  font-size: 2em;
  text-align: center;
  justify-content: center;
  color: #16ebe6;

  .list {
    display: flex;
    justify-content: space-around;
  }

  a {
    text-decoration: none;
    color: #16ebe6;
  }
`;

export const Body = styled.div`
  margin: 0px;
  padding: 0px;
  background-color: black;
  color: white;

  h1 {
    text-align: center;
    color: #16ebe6;
  }

  h2 {
    margin-left: 5rem;
  }
`;
