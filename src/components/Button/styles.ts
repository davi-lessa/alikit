import styled from "styled-components";

export const Btn = styled.button`
  border: none;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  padding: 8px 15px;
  transition: background 0.25s;
  user-select: none;

  &.primary {
    background: var(--primary);
    color: var(--primary-contrast);
    &:hover {
      background: var(--primary-tint);
    }
    &:active {
      background: var(--primary-shade);
    }
  }

  &.secondary {
    background: var(--secondary);
    color: var(--secondary-contrast);
    &:hover {
      background: var(--secondary-tint);
    }
    &:active {
      background: var(--secondary-shade);
    }
  }

  &.tertiary {
    background: var(--tertiary);
    color: var(--tertiary-contrast);
    &:hover {
      background: var(--tertiary-tint);
    }
    &:active {
      background: var(--tertiary-shade);
    }
  }

  &.neutral {
    background: var(--light);
    color: var(--light-contrast);

    &:hover {
      background: #f8f9fc;
    }

    &:active {
      background: var(--light-shade);
    }
  }
`;
