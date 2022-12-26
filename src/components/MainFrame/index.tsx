import React from "react";

import { Container } from "./styles";
import SearchBar from "../SearchBar";
import DataDisplayer from "../DataDisplayer";

interface Props {
  children?: React.ReactNode;
  title: string;
  description?: string;
}

const MainFrame: React.FC<Props> = ({ children, title, description }: Props) => {
  return (
    <>
      <Container>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
        <SearchBar />
        <DataDisplayer />
      </Container>
    </>
  );
};

export default MainFrame;
