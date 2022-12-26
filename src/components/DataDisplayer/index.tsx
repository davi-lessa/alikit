import React from "react";
import Button from "../Button";

import { Container, ActiveSection, NoData } from "./styles";
import Tabs from "./Tabs";

const DataDisplayer: React.FC = () => {
  return (
    <Container>
      <Tabs></Tabs>
      <ActiveSection>
        <NoData>
          <div className="back">
            <p>No data has been loaded from the api. Please, load some data before doing something.</p>
          </div>
          <div className="front">
            <p>Please, load some product first.</p>
            <Button theme="neutral">Load from URL</Button>
            <Button theme="neutral">Load from File (.json)</Button>
          </div>
        </NoData>
      </ActiveSection>
    </Container>
  );
};

export default DataDisplayer;
