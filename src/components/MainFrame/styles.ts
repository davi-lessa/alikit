import styled from "styled-components";

export const Container = styled.div`
  grid-area: mainframe;
  background-color: white;
  padding: 40px;

  h1 {
    margin-bottom: 0px;
  }

  h1 + p {
    color: var(--medium);
    margin-bottom: 20px;
  }
`;
