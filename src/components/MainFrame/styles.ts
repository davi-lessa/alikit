import styled from "styled-components";

export const Container = styled.div`
  grid-area: mainframe;
  background-color: white;
  padding: 40px;
  /* overflow-y: auto; */

  h1 {
    margin-bottom: 5px;
  }

  h1 + p {
    color: var(--medium);
    margin-bottom: 20px;
  }
`;
