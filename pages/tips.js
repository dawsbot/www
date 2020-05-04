import React from 'react';
import TweetEmbed from 'react-tweet-embed';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const PageContainer = styled.div`
  margin: 0 auto;
  padding: 100px 20px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    line-height: 1.1;
  }
  /* Nested selector required here so cascading flex styles apply to tweet */
  > div.tweet-embed {
    margin: 30px 0px;
    width: 500px;
    max-width: 100%;
  }
`;

// Tweet ID's from https://twitter.com/DawsonBotsford/media
const tweetsToEmbed = [
  '1256306431902400512',
  '1255497313738543106',
  '1251932593743900674',
  '1111636880930398208',
  '1111274493459214337',
  '1080638661442572288',
  '1070790985939124224',
  '1064549108504059906',
  '944598726143770624',
  '850024472069324800',
  '847528986179649536',
  '838842074623455233',
  '823262218615558144',
  '740953517234360320',
  '734005965654085636',
  '733669891861938176',
  '732980590819991552',
];

const Tips = () => {
  return (
    <PageContainer>
      <h1>Become a better developer with these {tweetsToEmbed.length} tips!</h1>
      {tweetsToEmbed.map((tweetId, index) => {
        if (index > 4) {
          return (
            <LazyLoad height={500} offset={1000} once>
              <TweetEmbed key={tweetId} id={tweetId} className="tweet-embed" />
            </LazyLoad>
          );
        }
        return (
          <TweetEmbed key={tweetId} id={tweetId} className="tweet-embed" />
        );
      })}
    </PageContainer>
  );
};

export default Tips;
