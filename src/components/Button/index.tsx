import React from "react";

import { Btn } from "./styles";

interface Props {
  text?: string;
  theme?: "primary" | "secondary" | "tertiary" | "neutral";
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ children, text, theme }) => {
  function setLoadingState() {}

  return <Btn className={theme || "neutral"}>{children || text || "Button"}</Btn>;
};

export default Button;
