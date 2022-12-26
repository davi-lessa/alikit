import React from "react";

import { Btn } from "./styles";

interface Props {
  text?: string;
  children: React.ReactNode;
}

const Button: React.FC<Props> = (props) => {
  function setLoadingState() {}

  return <Btn className="secondary">{props.children || "Button"}</Btn>;
};

export default Button;
