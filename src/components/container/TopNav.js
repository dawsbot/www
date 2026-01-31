import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useTheme } from '../ThemeContext';

const TopNavContainer = styled.div`
  @media print {
    display: none;
  }
  background-color: ${props => props.$navBg};
  height: 60px;
  color: ${props => props.$navText};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.$font};
  transition: background-color 0.4s ease, color 0.4s ease;

  > a {
    color: ${props => props.$navText};
    text-decoration: none;
    margin-left: 4vw;
    margin-right: 4vw;
    transition: color 0.3s ease;
  }
`;

const TopNav = () => {
  const { theme } = useTheme();

  return (
    <TopNavContainer
      $navBg={theme.navBg}
      $navText={theme.navText}
      $font={theme.bodyFont}
    >
      <Link href="/">
        <a>Home</a>
      </Link>
      •
      <Link href="/tips">
        <a>Developer Tips</a>
      </Link>
      •
      <Link href="/resume">
        <a>Resume</a>
      </Link>
    </TopNavContainer>
  );
};

export default TopNav;
