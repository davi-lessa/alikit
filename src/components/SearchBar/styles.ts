import styled from "styled-components";

export const Container = styled.div`
  padding: var(--global-default-padding) 30px;
  border: 2px solid #e8e8e8;
  border-radius: 6px;
  transition: border-color 0.25s ease;

  label {
    font-weight: 300;
  }

  &:focus-within {
    border-color: var(--secondary);
  }
`;

export const Input = styled.input`
  border-radius: 6px;
  padding: 16px 20px;
  outline: none;
  border: none;
  box-shadow: 0 3px 10px 0 #eee;
  margin: 12px 0;
  width: 100%;
`;
