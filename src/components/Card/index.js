import React from "react";
import styled, { css } from "styled-components";
import DownArrow from "../../assets/icon-down.svg";
import UpArrow from "../../assets/icon-up.svg";

export const SocialCard = ({ data }) => {
  const {
    name,
    account,
    count,
    countCategory,
    countChange,
    socialIcon,
    positive,
  } = data;

  const borderStyles = {
    facebook: "hsl(208, 92%, 53%)",
    twitter: "hsl(203, 89%, 53%)",
    instagram:
      "linear-gradient(to right,hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
    youtube: "hsl(348, 97%, 39%)",
  };

  return (
    <Cover background={borderStyles[account]}>
      <CardStyle>
        <HandleWrapper>
          <img src={socialIcon} alt={account} />
          <Handle>{name}</Handle>
        </HandleWrapper>
        <div>
          <Count>{count}</Count>
          <Category>{countCategory}</Category>
        </div>
        <ChangeWrapper>
          <img src={positive ? UpArrow : DownArrow} alt="arrow" />
          <Change positive={positive}>{countChange} Today</Change>
        </ChangeWrapper>
      </CardStyle>
    </Cover>
  );
};

const CardStyle = styled.div`
  ${({ theme }) => `
  position: absolute;
  top: 4px;
  width: 250px;
  height: 200px;
  background: ${theme.colors.bgCard};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 0;
  align-items: center;
`}
`;

const Cover = styled.div`
  position: relative;
  background: ${(p) => p.background};
  width: 250px;
  border-radius: 3px;
  height: 200px;
`;

const Count = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;

const Category = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: ${(p) => p.theme.colors.altText};
  letter-spacing: 4px;
  text-align: center;
  text-transform: uppercase;
`;

const HandleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Handle = styled.span`
  color: ${(p) => p.theme.colors.altText};
  font-size: 12px;
  font-weight: 700;
  margin-left: 8px;
`;

const Change = styled.span`
  font-size: 12px;
  margin: 0 5px;
  font-weight: 700;
  color: hsl(356, 69%, 56%);

  ${(p) =>
    p.positive &&
    css`
      color: hsl(163, 72%, 41%);
    `}
`;

const ChangeWrapper = styled.div`
  display: flex;
  align-items: center;
`;
