import styled from "styled-components";

export const MiddleRow = styled.div`
  grid-area: middlerow;
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-rows: 1fr;
  grid-template-areas: "mainframe rightbar";
  width: 100%;
  max-width: var(--global-max-width);
  border-left: 1px solid var(--light);
  border-right: 1px solid var(--light);
  box-shadow: 0 0 10px 0 var(--light);
  padding: var(--global-default-padding);
  margin: 0 auto;
  overflow-y: auto;
`;
