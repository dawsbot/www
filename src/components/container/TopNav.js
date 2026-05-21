import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '../ThemeContext';

const Bar = styled.header`
  @media print {
    display: none;
  }
  position: sticky;
  top: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 20px;
  background: ${props => props.$navBg};
  border-bottom: 2px solid #0e0e0e;
  font-family: ${props => props.$font};
`;

const Monogram = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #0e0e0e;
  color: #ffffff;
  font-family: ${props => props.$font};
  font-weight: 800;
  font-size: 16px;
  letter-spacing: 1px;
  text-decoration: none;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: #c4f000;
    color: #0e0e0e;
  }
`;

const Links = styled.nav`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const NavLink = styled(Link)`
  position: relative;
  padding: 8px 12px;
  color: #0e0e0e;
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 2px;
    height: 3px;
    background: #c4f000;
    transform: scaleX(${props => (props.$active ? 1 : 0)});
    transform-origin: left;
    transition: transform 0.22s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const links = [
  { href: '/', label: 'Home' },
  { href: '/resume', label: 'Resume' },
];

const TopNav = () => {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <Bar $navBg={theme.navBg} $font={theme.headingFont}>
      <Monogram href="/" $font={theme.headingFont} aria-label="Home">
        DB
      </Monogram>
      <Links>
        {links.map(link => (
          <NavLink
            key={link.href}
            href={link.href}
            $active={router.pathname === link.href}
          >
            {link.label}
          </NavLink>
        ))}
      </Links>
    </Bar>
  );
};

export default TopNav;
