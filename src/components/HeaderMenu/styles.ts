import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid var(--light);
  /* box-shadow: 0 -5px 5px 0 #e8e8e8 inset; */
  z-index: 10;
`;

export const HeaderContent = styled.div`
  max-width: var(--global-max-width);
  width: 100%;
  margin: 0 auto;
`;
