import React from "react";
import { SocialCard } from "../components/Card";
import { socialData } from "../data/staticData";
import styled from "styled-components";

export const Overview = () => {
  const { overviewToday } = socialData;
  return (
    <SocialContainerStyle>
      {overviewToday.map((data) => (
        <SocialCard key={data.id} data={data} />
      ))}
    </SocialContainerStyle>
  );
};

const SocialContainerStyle = styled.section`
  display: flex;
  justify-content: space-between;
`;
