import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

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
  min-height: 220px;
  display: grid;
  align-items: center;
  text-align: center;
  background-color: white;
  color: black;
  box-sizing: border-box;
  max-width: 100%;
  @media (min-width: 700px) {
    width: 300px;
  }
  margin: 12px;
  :hover {
    animation: bounce 0.7s;
  }
`;

const StarBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background-color: #fef3c7;
  color: #92400e;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
  margin-top: 8px;
`;

const usesImages = {
  typescript: '/icons8-typescript.svg',
  javascript: '/icons8-javascript.svg',
  nodejs: '/icons8-nodejs.svg',
  ethereum: '/icons8-ethereum.svg',
  reactjs: '/icons8-react-native.svg',
};

export const ProjectCard = ({ title, href, description, uses = [], stars }) => (
  <a
    href={href}
    style={{ textDecoration: 'none' }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Card>
      <div>
        <h3 style={{ fontSize: '20px', marginTop: 0 }}>{title}</h3>
        <p style={{ fontSize: '15px', lineHeight: '1.4' }}>{description}</p>
        <div>
          {uses
            .sort()
            .reverse()
            .map(technology => (
              <img
                key={title + technology}
                src={usesImages[technology]}
                alt={`Logo for ${technology}`}
                style={{ height: '32px', margin: '0 4px' }}
              />
            ))}
        </div>
        {stars && (
          <StarBadge>
            <FaStar size={12} color="#f59e0b" />
            {stars}
          </StarBadge>
        )}
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
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    height: 70px !important;
  }
`;

export const ProjectsGridContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
