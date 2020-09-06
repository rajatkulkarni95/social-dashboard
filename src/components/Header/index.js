import React from "react";
import { HeaderBlock, Heading, Total } from "./styles";

export const Header = () => {
  return (
    <HeaderBlock>
      <Heading>
        <h2>Social Media Dashboard</h2>
        <Total>Total Followers: 23,004</Total>
      </Heading>
    </HeaderBlock>
  );
};
