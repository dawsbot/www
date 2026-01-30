import React from 'react';
import { css } from 'glamor';
import Typed from 'typed.js';

import Image from 'next/image';
import styled from 'styled-components';

import { darkPurple, bleen } from '../colors';

import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaStar,
} from 'react-icons/fa';

import {
  ProjectCard,
  BuiltWithBubblesContainer,
  BubbleContainer,
  ProjectsGridContainer,
} from './styled-components';

const SocialIconAnchor = styled.a`
  text-decoration: none;
  color: ${darkPurple};
`;
const styles = {
  introTextContainer: {
    textAlign: 'center',
  },
  mega: {
    fontSize: '50px',
  },
  sectionWrapper: {
    padding: '110px 26px 100px 26px',
  },
  section: {
    margin: '0 auto',
    maxWidth: '1000px',
  },
  headshot: {
    borderRadius: '3px',
    padding: '4px',
    border: '2px solid grey',
  },
  darkBackground: {
    backgroundColor: darkPurple,
    boxShadow: '0px 4px 14px 0px rgba(71,71,71,1)',
    color: 'white',
    width: '100vw',
    boxSizing: 'border-box',
    transform: 'skewY(8deg)',
    marginTop: '80px',
    paddingTop: '80px',
    paddingBottom: '180px',
    paddingLeft: '26px',
    paddingRight: '26px',
  },
  untilt: {
    transform: 'skewY(-8deg)',
  },
  dark: {
    color: darkPurple,
  },
  introHeader: {
    lineHeight: '36px',
  },
  loveHeader: {
    lineHeight: '36px',
    height: '60px',
    marginBottom: '40px',
  },
  bioDescription: {
    borderRadius: '16px',
    boxShadow: '0px 4px 14px 0px rgba(71,71,71,1)',
    backgroundColor: darkPurple,
    color: 'white',
    lineHeight: 1.6,
    display: 'flex',
    padding: '60px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  formContainer: {
    border: '2px solid white',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '16px',
    padding: '40px',
  },
  input: {
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid black',
    height: '42px',
    marginTop: '8px',
    marginBottom: '20px',
    borderRadius: '4px',
    paddingLeft: '20px',
    fontSize: '17px',
  },
  submitButton: {
    fontSize: '17px',
    height: '46px',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: darkPurple,
    borderColor: darkPurple,
    color: bleen,
  },
  textArea: {
    height: '120px',
    paddingTop: '14px',
    paddingBottom: '14px',
  },
};

const TalkButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 18px 44px;
  border-radius: 18px;
  background-color: ${bleen};
  color: ${darkPurple};
  font-weight: bold;
  border-width: 0px;
  font-size: 18px;
`;

const BioText = styled.p`
  font-size: 18px;
  line-height: 1.7;
  max-width: 700px;
  text-align: center;
  margin: 0 auto 20px;
  color: rgba(255, 255, 255, 0.9);
`;

const ExpertiseGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
  max-width: 700px;
`;

const ExpertiseTag = styled.span`
  background-color: rgba(92, 229, 213, 0.15);
  color: ${bleen};
  border: 1px solid rgba(92, 229, 213, 0.3);
  padding: 8px 18px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const typedJSOptions = {
  strings: [
    'a CTO',
    'an AI Strategist',
    'an Open-Source Engineer',
    'a Fintech Builder',
    'a Technical Leader',
  ],
  typeSpeed: 36,
  backSpeed: 35,
  backDelay: 1700,
  loop: true,
};

export const featuredProjects = [
  {
    title: '🏅 Earnifi',
    href: 'https://earni.fi',
    description:
      'An airdrop checker that found $500 million+ for web3 users. Acquired by Bankless.',
    uses: ['ethereum', 'typescript', 'reactjs', 'nodejs'],
    stars: null,
  },
  {
    title: '🪶 Essential Eth',
    href: 'https://github.com/dawsbot/essential-eth',
    description:
      'A lightweight alternative to ethers.js & web3.js — 10x smaller bundle size.',
    uses: ['typescript', 'ethereum'],
    stars: 308,
  },
  {
    title: '📃 Eth Labels',
    href: 'https://github.com/dawsbot/eth-labels',
    description:
      'A public dataset of labeled Ethereum addresses for the crypto ecosystem.',
    uses: ['ethereum'],
    stars: 246,
  },
  {
    title: '🫗 Drain',
    href: 'https://github.com/dawsbot/drain',
    description:
      'Drain a wallet of ERC-20 tokens across Ethereum, Polygon, and Arbitrum — fast.',
    uses: ['typescript', 'ethereum'],
    stars: 203,
  },
  {
    title: '💌 Mailto',
    href: 'https://mailto.vercel.app',
    description: 'A web app for creating email mailto links instantly.',
    uses: ['javascript', 'reactjs'],
    stars: 224,
  },
  {
    title: '🏊 Swim',
    href: 'https://github.com/dawsbot/swim',
    description: 'Switch between multiple vimrc files with ease.',
    uses: [],
    stars: 84,
  },
  {
    title: '🔌 RelativePath',
    href: 'https://github.com/dawsbot/RelativePath',
    description: 'VS Code extension for inserting relative file paths.',
    uses: ['typescript'],
    stars: 70,
  },
  {
    title: 'ⓥ Vimrc Builder',
    href: 'https://vimrc-builder.vercel.app',
    description: 'A visual web app for building your perfect vimrc file.',
    uses: ['javascript', 'reactjs'],
    stars: 57,
  },
  {
    title: '🧨 txn.xyz',
    href: 'https://github.com/dawsbot/txn.xyz',
    description: 'Connect any wallet to web3 instantly.',
    uses: ['typescript', 'ethereum'],
    stars: 56,
  },
  {
    title: '🗑 Skrub',
    href: 'https://github.com/dawsbot/skrub',
    description: 'Irreversible file deletion on every operating system.',
    uses: ['javascript', 'nodejs'],
    stars: 51,
  },
  {
    title: '🔥 Free Eth Node',
    href: 'https://github.com/dawsbot/free-eth-node',
    description: 'Connect to any EVM chain instantly — free RPC endpoints.',
    uses: ['typescript', 'ethereum'],
    stars: 27,
  },
];

const expertiseAreas = [
  'AI Strategy & Consulting',
  'Technical Leadership',
  'Fintech & Neobanking',
  'Ethereum & Blockchain',
  'Open Source Engineering',
  'JavaScript / TypeScript',
  'React & Node.js',
  'Web3 & DeFi',
  'Engineering Management',
  'Fractional CTO',
];

class IndexIndex extends React.Component {
  componentDidMount() {
    this.typed = new Typed(this.el, typedJSOptions);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <>
        {/* Hero Section */}
        <div className={css(styles.sectionWrapper)}>
          <section className={css(styles.section)}>
            <div className={css(styles.introTextContainer)}>
              <Image
                className={css(styles.headshot)}
                src="/my-face.jpg"
                alt="Dawson Botsford — CTO, AI strategist, and open source engineer"
                width={300}
                height={300}
              />
              <h1 className={css(styles.introHeader)}>{`Hi, I'm Dawson!`}</h1>
              <h1 className={css(styles.mega)}>
                <span role="img" aria-label="hand wave">
                  👋
                </span>
              </h1>
            </div>
            <h2 className={css(styles.loveHeader)}>
              {`I'm `}
              <span
                ref={el => {
                  this.el = el;
                }}
              />
              {` who ❤️'s the web`}
            </h2>
            <div className={css(styles.bioDescription)}>
              <BioText>
                Dawson Botsford is a technology leader specializing in{' '}
                <strong>AI strategy</strong>, fintech infrastructure, and{' '}
                <strong>open source software</strong>. As a{' '}
                <strong>CTO and engineering leader</strong>, he has built
                products in <strong>neobanking</strong>,{' '}
                <strong>blockchain</strong>, and developer tools used by
                thousands of engineers worldwide.
              </BioText>
              <BioText>
                With deep expertise in <strong>Ethereum</strong> and web3, he
                founded Earnifi — an airdrop platform that found over $500M for
                crypto users before being acquired by Bankless. He builds{' '}
                <strong>AI-integrated products</strong> and advises companies on{' '}
                <strong>AI consulting</strong> and technical strategy.
              </BioText>

              <h3
                style={{
                  color: bleen,
                  marginBottom: '10px',
                  marginTop: '30px',
                }}
              >
                Areas of Expertise
              </h3>
              <ExpertiseGrid>
                {expertiseAreas.map(area => (
                  <ExpertiseTag key={area}>{area}</ExpertiseTag>
                ))}
              </ExpertiseGrid>

              <BuiltWithBubblesContainer style={{ marginTop: '40px' }}>
                <BubbleContainer>
                  <img
                    src={require('../../../media/icons8-react-native.svg')}
                    style={{ height: 100 }}
                    alt="React logo — core technology for building user interfaces"
                  />
                  <div style={{ color: 'black' }}>React</div>
                </BubbleContainer>
                <BubbleContainer>
                  <img
                    src={require('../../../media/icons8-nodejs.svg')}
                    style={{ height: 100 }}
                    alt="Node.js logo — JavaScript runtime for server-side development"
                  />
                  <div style={{ color: 'black' }}>Node.js</div>
                </BubbleContainer>
                <BubbleContainer>
                  <img
                    src={require('../../../media/icons8-ethereum.svg')}
                    style={{ height: 100 }}
                    alt="Ethereum logo — blockchain platform for smart contracts"
                  />
                  <div style={{ color: 'black' }}>Solidity</div>
                </BubbleContainer>
                <BubbleContainer>
                  <img
                    src={require('../../../media/icons8-typescript.svg')}
                    style={{ height: 100 }}
                    alt="TypeScript logo — typed JavaScript for large-scale applications"
                  />
                  <div style={{ color: 'black' }}>TypeScript</div>
                </BubbleContainer>
              </BuiltWithBubblesContainer>

              <TalkButtonContainer>
                <a href="#email-form">
                  <Button>{`Let's talk`}</Button>
                </a>
              </TalkButtonContainer>
            </div>
          </section>
        </div>

        {/* Projects Section */}
        <div {...css(styles.sectionWrapper, styles.darkBackground)}>
          <div className={css(styles.untilt)}>
            <section className={css(styles.section)}>
              <h2 style={{ color: bleen }}>Open Source Projects</h2>
              <p style={{ opacity: 0.8, marginBottom: '10px' }}>
                Building developer tools, Ethereum libraries, and fintech
                infrastructure used by thousands of developers worldwide.
              </p>
              <ProjectsGridContainer>
                {featuredProjects.map(project => {
                  const dynamicStars =
                    this.props.starCounts &&
                    this.props.starCounts[project.href];
                  return (
                    <ProjectCard
                      key={project.title}
                      href={project.href}
                      title={project.title}
                      description={project.description}
                      uses={project.uses}
                      stars={dynamicStars || project.stars}
                    />
                  );
                })}
              </ProjectsGridContainer>
            </section>
          </div>
        </div>

        {/* Social Section */}
        <div className={css(styles.sectionWrapper)}>
          <section className={css(styles.section)}>
            <h2 style={{ color: bleen }}>Connect with Dawson</h2>
            <div
              style={{
                maxWidth: '100%',
                marginRight: '40px',
                marginLeft: '40px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <SocialIconAnchor
                  href="https://twitter.com/dawsonbotsford"
                  aria-label="Twitter — Dawson Botsford"
                >
                  <FaTwitterSquare size="300px" title="Twitter" />
                </SocialIconAnchor>
                <SocialIconAnchor
                  href="https://github.com/dawsbot"
                  aria-label="GitHub — Dawson Botsford open source projects"
                >
                  <FaGithubSquare size="300px" title="GitHub" />
                </SocialIconAnchor>
                <SocialIconAnchor
                  href="https://linkedin.com/in/dawsonbotsford"
                  aria-label="LinkedIn — Dawson Botsford professional profile"
                >
                  <FaLinkedin size="300px" title="LinkedIn" />
                </SocialIconAnchor>
              </div>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <div {...css(styles.sectionWrapper, styles.darkBackground)}>
          <div className={css(styles.untilt)}>
            <section className={css(styles.section)} id="email-form">
              <h2 style={{ color: bleen }}>
                {`Get in Touch — AI Consulting & Technical Leadership`}
              </h2>
              <p style={{ opacity: 0.8, marginBottom: '30px' }}>
                Looking for a fractional CTO, AI strategy advisor, or technical
                co-founder? {`Let's`} talk about your project.
              </p>

              <form
                className={css(styles.formContainer)}
                action="https://formspree.io/db-travel@tryninja.io"
                method="POST"
              >
                <label htmlFor="name">
                  Name
                  <input
                    className={css(styles.input)}
                    type="text"
                    name="name"
                    placeholder="Jane"
                  />
                </label>

                <label htmlFor="email">
                  Email
                  <input
                    className={css(styles.input)}
                    type="email"
                    name="_replyto"
                    placeholder="Jane@gmail.com"
                  />
                </label>

                <label htmlFor="subject">
                  Subject
                  <textarea
                    {...css(styles.input, styles.textArea)}
                    name="subject"
                    placeholder="Looking for AI consulting, technical leadership, or open source collaboration..."
                  />
                </label>

                {/* catch the bots */}
                <input
                  className={css(styles.input)}
                  type="text"
                  name="_gotcha"
                  style={{ display: 'none' }}
                />

                <input
                  {...css(styles.input, styles.submitButton)}
                  type="submit"
                  value="Send"
                />
                <p>
                  icons from{' '}
                  <a
                    href="https://icons8.com/"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    icons8
                  </a>
                </p>
              </form>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default IndexIndex;
