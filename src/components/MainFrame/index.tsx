import React from "react";

import { Container } from "./styles";

interface Props {
  children: any;
}

const MainFrame: React.FC<Props> = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default MainFrame;
