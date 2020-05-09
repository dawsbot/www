import React from 'react';
import styled from 'styled-components';

// linking to open-source projects I've created
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
  height: 280px;
  display: grid;
  align-items: center; // vertical
  text-align: center;
  background-color: white;
  color: black;
  box-sizing: border-box;
  max-width: 100%;
  // desktop only
  @media (min-width: 700px) {
    width: 400px;
  }
  margin: 20px;
  :hover {
    animation: bounce 0.7s;
  }
`;

const usesImages = {
  javascript: require('../../media/icons8-javascript.svg'),
  nodejs: require('../../media/icons8-nodejs.svg'),
  ethereum: require('../../media/icons8-ethereum.svg'),
  reactjs: require('../../media/icons8-react-native.svg'),
};
export const ProjectCard = ({ title, href, description, uses = [] }) => (
  <a
    href={href}
    style={{ textDecoration: 'none' }}
    target="_blank"
    rel="noopener noreferrer"
  >
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

export const BuiltWithBubblesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BubbleContainer = styled.span`
  background-color: white;
  border-radius: 50%;
  margin: 10px;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProjectsGridContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // desktop only
  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
