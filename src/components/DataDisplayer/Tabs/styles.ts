import styled from "styled-components";

export const Container = styled.div`
  overflow-x: auto;
  border-bottom: 1px solid var(--light);
`;

export const TabsList = styled.ul`
  list-style-type: none;
  display: flex;
  max-width: 20vw;
  min-width: 100%;
`;

export const TabsItem = styled.li`
  padding: 10px 18px;
  cursor: pointer;
  user-select: none;
  transition: background 0.25s ease;

  &:hover {
    background: var(--light);
  }

  &:active {
    background: #ecedf0;
  }

  &:first-child {
  }
`;
