import React from "react";

import { Container, TabsItem, TabsList } from "./styles";

interface Props {
  children?: React.ReactNode;
}

const Tabs: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <TabsList>
        <TabsItem>General</TabsItem>
        <TabsItem>Description</TabsItem>
        <TabsItem>Media</TabsItem>
        <TabsItem>Reviews</TabsItem>
      </TabsList>
    </Container>
  );
};

export default Tabs;
