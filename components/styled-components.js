import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  @keyframes bounce {
    0%,
    20%,
    60%,
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    40% {
      -webkit-transform: translateY(-20px);
      transform: translateY(-20px);
    }

    80% {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
    }
  }
  border-radius: 16px;
  padding: 30px;
  height: 240px;
  display: grid;
  align-items: center; // vertical
  text-align: center;
  background-color: white;
  color: black;
  :hover {
    animation: bounce 0.7s;
  }
`;

const usesImages = {
  javascript: require('../media/icons8-javascript.svg'),
  nodejs: require('../media/icons8-nodejs.svg'),
  ethereum: require('../media/icons8-ethereum.svg'),
  reactjs: require('../media/icons8-react-native.svg')
};
export const ProjectCard = ({ title, href, description, uses = [] }) => (
  <a href={href} style={{ textDecoration: 'none' }} target="_blank">
    <Card>
      <div>
        <h3 style={{ fontSize: '22px' }}>{title}</h3> <p>$_ {description}</p>
        {uses
          .sort()
          .reverse()
          .map(technology => (
            <img
              key={title + technology}
              src={usesImages[technology]}
              alt={`Logo for ${technology}`}
            />
          ))}
      </div>
    </Card>
  </a>
);

export const ProjectsGridContainer = styled.div`
  margin-top: 80px;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(400px, auto));
`;
