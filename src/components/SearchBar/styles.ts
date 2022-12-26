import styled from "styled-components";

export const Container = styled.div`
  padding: var(--global-default-padding) 30px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  transition: border-color 0.25s ease;
  background: linear-gradient(135deg, transparent, #fafafa);

  label {
    font-weight: 300;
  }

  :focus-within {
    border-color: var(--secondary);
  }

  .processing {
    animation: processing 0.75s infinite alternate-reverse ease-in-out;
  }

  @keyframes processing {
    0% {
      border-color: var(--secondary);
    }
    100% {
      border-color: #e8e8e8;
    }
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
