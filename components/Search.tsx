import React from "react";
import styled from "@emotion/styled";

const StyledSearch = styled.div`
  input {
    border: 1px solid #ddd;
    padding: 4px 8px;
    border-radius: 12px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }
  input:focus {
    outline: none;
  }
  @media (max-width: 648px) {
    input {
      width: 100px;
    }
  }
`;

const Search = () => {
  return (
    <StyledSearch>
      <input type="text" placeholder="Search..." />
    </StyledSearch>
  );
};

export default Search;
