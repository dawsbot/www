import React from 'react';
import styled from 'styled-components';

export const Card = styled.div`
  border: 2px solid white;
  border-radius: 6px;
  padding: 30px;
  width: 360px;
  text-align: center;
  background-color: white;
  color: black;
`;

export default ({ title, href, description }) => (
  <a href={href} style={{ textDecoration: 'none' }}>
    <Card>
      <h3 style={{ fontSize: '22px' }}>{title}</h3> <p>$_ {description}</p>
    </Card>
  </a>
);
