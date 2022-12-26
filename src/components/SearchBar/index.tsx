import React from "react";

import { Container } from "./styles";

const SearchBar: React.FC = () => {
  return (
    <Container>
      <input type="text" name="search_url" id="search_url" />
    </Container>
  );
};

export default SearchBar;
