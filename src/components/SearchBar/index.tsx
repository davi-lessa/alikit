import React from "react";

import { Container, Input } from "./styles";
import Button from "../Button";

const SearchBar: React.FC = () => {
  return (
    <Container>
      <h2>Try it right now.</h2>
      <label htmlFor="search_url">Insert the product id or url:</label>
      <Input type="text" name="search_url" id="search_url" placeholder="eg: https://pt.aliexpress.com/item/12436587091.html" />
      <Button>Get JSON</Button>
    </Container>
  );
};

export default SearchBar;
