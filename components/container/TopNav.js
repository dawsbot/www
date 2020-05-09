import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const TopNavContainer = styled.div`
  @media print {
    display: none;
  }
  background-color: black;
  height: 60px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  > a {
    color: white;
    text-decoration: none;
    margin-left: 4vw;
    margin-right: 4vw;
  }
`;

const TopNav = () => (
  <TopNavContainer>
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

export default TopNav;
