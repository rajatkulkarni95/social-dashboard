import React from "react";
import { SocialCard } from "../components/Card";
import { socialData } from "../data/staticData";
import styled from "styled-components";

export const OverviewContainer = () => {
  const { overview } = socialData;
  return (
    <SocialContainerStyle>
      {overview.map((data) => (
        <SocialCard key={data.id} data={data} />
      ))}
    </SocialContainerStyle>
  );
};

const SocialContainerStyle = styled.section`
  display: flex;
  justify-content: space-between;
`;
