import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Image from 'next/image';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

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
    title: 'Earnifi',
    emoji: '🏅',
    href: 'https://earni.fi',
    description:
      'An airdrop checker that found $500 million+ for web3 users. Acquired by Bankless.',
    uses: ['ethereum', 'typescript', 'reactjs', 'nodejs'],
    stars: null,
  },
  {
    title: 'Essential Eth',
    emoji: '🪶',
    href: 'https://github.com/dawsbot/essential-eth',
    description:
      'A lightweight alternative to ethers.js & web3.js. 10x smaller bundle size.',
    uses: ['typescript', 'ethereum'],
    stars: 308,
  },
  {
    title: 'Eth Labels',
    emoji: '📃',
    href: 'https://github.com/dawsbot/eth-labels',
    description:
      'A public dataset of labeled Ethereum addresses for the crypto ecosystem.',
    uses: ['ethereum'],
    stars: 246,
  },
  {
    title: 'Drain',
    emoji: '🫗',
    href: 'https://github.com/dawsbot/drain',
    description:
      'Drain a wallet of ERC-20 tokens across Ethereum, Polygon, and Arbitrum. Fast.',
    uses: ['typescript', 'ethereum'],
    stars: 203,
  },
  {
    title: 'Mailto',
    emoji: '💌',
    href: 'https://mailto.vercel.app',
    description: 'A web app for creating email mailto links instantly.',
    uses: ['javascript', 'reactjs'],
    stars: 224,
  },
  {
    title: 'Swim',
    emoji: '🏊',
    href: 'https://github.com/dawsbot/swim',
    description: 'Switch between multiple vimrc files with ease.',
    uses: [],
    stars: 84,
  },
  {
    title: 'RelativePath',
    emoji: '🔌',
    href: 'https://github.com/dawsbot/RelativePath',
    description: 'VS Code extension for inserting relative file paths.',
    uses: ['typescript'],
    stars: 70,
  },
  {
    title: 'Vimrc Builder',
    emoji: 'ⓥ',
    href: 'https://vimrc-builder.vercel.app',
    description: 'A visual web app for building your perfect vimrc file.',
    uses: ['javascript', 'reactjs'],
    stars: 57,
  },
  {
    title: 'txn.xyz',
    emoji: '🧨',
    href: 'https://github.com/dawsbot/txn.xyz',
    description: 'Connect any wallet to web3 instantly.',
    uses: ['typescript', 'ethereum'],
    stars: 56,
  },
  {
    title: 'Skrub',
    emoji: '🗑',
    href: 'https://github.com/dawsbot/skrub',
    description: 'Irreversible file deletion on every operating system.',
    uses: ['javascript', 'nodejs'],
    stars: 51,
  },
  {
    title: 'Free Eth Node',
    emoji: '🔥',
    href: 'https://github.com/dawsbot/free-eth-node',
    description: 'Connect to any EVM chain instantly. Free RPC endpoints.',
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

function ThemeEffects() {
  return (
    <style>{`
      .swiss-number {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 72px;
        line-height: 1;
        color: #e60012;
        position: absolute;
        top: -10px;
        left: 12px;
        opacity: 0.15;
        user-select: none;
      }
      .swiss-card {
        transition: background-color 0.2s ease;
        position: relative;
        overflow: hidden;
      }
      .swiss-card:hover {
        background-color: #1a1a1a !important;
        color: #ffffff !important;
      }
      .swiss-card:hover h3,
      .swiss-card:hover p {
        color: #ffffff !important;
      }
      .swiss-card:hover .swiss-number {
        color: #e60012;
        opacity: 0.3;
      }
    `}</style>
  );
}

function ProjectCard({ project, index, theme, dynamicStars }) {
  const stars = dynamicStars || project.stars;

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="swiss-card"
      style={{
        display: 'block',
        textDecoration: 'none',
        color: theme.cardText,
        backgroundColor: theme.cardBg,
        border: theme.cardBorderStyle,
        borderRadius: '0px',
        padding: '36px 28px 28px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <span className="swiss-number">{String(index + 1).padStart(2, '0')}</span>
      <h3
        style={{
          fontFamily: theme.headingFont,
          fontSize: '26px',
          fontWeight: 400,
          margin: '0 0 8px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}
      >
        {project.title}
      </h3>
      <p
        style={{
          fontSize: '14px',
          lineHeight: 1.6,
          margin: '0 0 14px',
          color: theme.textSecondary,
          fontWeight: 300,
        }}
      >
        {project.description}
      </p>
      {stars && (
        <span
          style={{
            display: 'inline-block',
            backgroundColor: theme.starBg,
            color: theme.starText,
            padding: '3px 12px',
            fontSize: '12px',
            fontWeight: 600,
            fontFamily: theme.headingFont,
            letterSpacing: '1px',
          }}
        >
          ★ {stars}
        </span>
      )}
    </a>
  );
}

function ProjectsSection({ theme, projects, starCounts }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2px',
        marginTop: '40px',
        backgroundColor: '#1a1a1a',
      }}
    >
      {projects.map((project, i) => {
        const dynamicStars = starCounts && starCounts[project.href];
        return (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            theme={theme}
            dynamicStars={dynamicStars}
          />
        );
      })}
    </div>
  );
}

function SectionLabel({ theme, children }) {
  return (
    <h2
      style={{
        color: theme.accent,
        fontFamily: theme.headingFont,
        fontSize: '64px',
        fontWeight: 400,
        letterSpacing: '4px',
        textTransform: 'uppercase',
        lineHeight: 1,
        marginBottom: '30px',
      }}
    >
      {children}
    </h2>
  );
}

function IndexIndex({ starCounts }) {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, typedJSOptions);
    }
    return () => {
      if (typedInstance.current) typedInstance.current.destroy();
    };
  }, []);

  return (
    <>
      <ThemeEffects />

      {/* Hero Section */}
      <div style={{ padding: '80px 40px' }}>
        <section style={{ margin: '0 auto', maxWidth: '1000px' }}>
          <div
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image
              src="/my-face.jpg"
              alt="Dawson Botsford, CTO, AI strategist, and open source engineer"
              width={300}
              height={300}
              style={{
                borderRadius: '0px',
                border: 'none',
                filter: 'grayscale(1) contrast(1.3)',
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <h1
                style={{
                  fontFamily: theme.headingFont,
                  fontSize: '80px',
                  fontWeight: 400,
                  color: theme.text,
                  lineHeight: 0.9,
                  letterSpacing: '4px',
                  textTransform: 'uppercase',
                  margin: '0 0 10px',
                }}
              >
                {`Hi, I'm Dawson!`}
              </h1>
              <h1 style={{ fontSize: '50px', margin: '10px 0' }}>
                <span role="img" aria-label="hand wave">
                  👋
                </span>
              </h1>
            </div>
          </div>

          {/* Typed.js subtitle */}
          <h2
            style={{
              textAlign: 'center',
              fontFamily: theme.bodyFont,
              fontSize: '22px',
              fontWeight: 400,
              color: theme.text,
              lineHeight: '36px',
              height: '60px',
              marginBottom: '40px',
            }}
          >
            {`I'm `}
            <span ref={typedRef} />
            {` who ❤️'s the web`}
          </h2>

          {/* Bio Card */}
          <div
            style={{
              borderRadius: theme.cardRadius,
              backgroundColor: theme.bg,
              color: '#ffffff',
              border: `2px solid ${theme.bg}`,
              lineHeight: 1.6,
              display: 'flex',
              padding: '60px',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.7,
                maxWidth: '700px',
                textAlign: 'center',
                margin: '0 auto 20px',
                color: 'rgba(255,255,255,0.9)',
                fontFamily: theme.bodyFont,
              }}
            >
              Dawson Botsford is a technology leader specializing in{' '}
              <strong>AI strategy</strong>, fintech infrastructure, and{' '}
              <strong>open source software</strong>. As a{' '}
              <strong>CTO and engineering leader</strong>, he has built products
              in <strong>neobanking</strong>, <strong>blockchain</strong>, and
              developer tools used by thousands of engineers worldwide.
            </p>
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.7,
                maxWidth: '700px',
                textAlign: 'center',
                margin: '0 auto 20px',
                color: 'rgba(255,255,255,0.9)',
                fontFamily: theme.bodyFont,
              }}
            >
              With deep expertise in <strong>Ethereum</strong> and web3, he
              founded Earnifi, an airdrop platform that found over $500M for
              crypto users before being acquired by Bankless. He builds{' '}
              <strong>AI-integrated products</strong> and advises companies on{' '}
              <strong>AI consulting</strong> and technical strategy.
            </p>

            {/* Expertise Tags */}
            <h3
              style={{
                color: theme.accent,
                marginBottom: '10px',
                marginTop: '30px',
                fontFamily: theme.headingFont,
                fontSize: '32px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontWeight: 400,
              }}
            >
              Areas of Expertise
            </h3>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0px',
                marginTop: '10px',
                maxWidth: '700px',
              }}
            >
              {expertiseAreas.map(area => (
                <span
                  key={area}
                  style={{
                    backgroundColor: theme.tagBg,
                    color: theme.tagText,
                    border: `1px solid ${theme.tagBorder}`,
                    padding: '6px 14px',
                    borderRadius: '0px',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    fontFamily: theme.bodyFont,
                    textTransform: 'uppercase',
                    margin: '-1px',
                  }}
                >
                  {area}
                </span>
              ))}
            </div>

            {/* Tech Bubbles */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginTop: '40px',
              }}
            >
              {[
                {
                  src: require('../../../media/icons8-react-native.svg'),
                  label: 'React',
                },
                {
                  src: require('../../../media/icons8-nodejs.svg'),
                  label: 'Node.js',
                },
                {
                  src: require('../../../media/icons8-ethereum.svg'),
                  label: 'Solidity',
                },
                {
                  src: require('../../../media/icons8-typescript.svg'),
                  label: 'TypeScript',
                },
              ].map(tech => (
                <span
                  key={tech.label}
                  style={{
                    backgroundColor: theme.bubbleBg,
                    borderRadius: '0px',
                    margin: '10px',
                    width: '140px',
                    height: '140px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    border: '2px solid #1a1a1a',
                    transition: 'transform 0.2s',
                  }}
                >
                  <img
                    src={tech.src}
                    alt={`${tech.label} logo`}
                    style={{ height: 70 }}
                  />
                  <div
                    style={{
                      color: theme.bubbleTextColor,
                      fontSize: '14px',
                      fontFamily: theme.bodyFont,
                      marginTop: '4px',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {tech.label}
                  </div>
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div
              style={{
                marginTop: '50px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <a href="#email-form" style={{ textDecoration: 'none' }}>
                <button
                  style={{
                    cursor: 'pointer',
                    padding: '18px 44px',
                    borderRadius: theme.buttonRadius,
                    backgroundColor: theme.accent,
                    color: '#ffffff',
                    fontWeight: 'bold',
                    border: `2px solid ${theme.accent}`,
                    fontSize: '18px',
                    fontFamily: theme.headingFont,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {`Let's talk`}
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Projects Section */}
      <div
        style={{
          backgroundColor: theme.bg,
          color: 'white',
          width: '100vw',
          boxSizing: 'border-box',
          marginTop: '0',
          paddingTop: '80px',
          paddingBottom: '180px',
          paddingLeft: '26px',
          paddingRight: '26px',
          borderTop: '2px solid #1a1a1a',
        }}
      >
        <section style={{ margin: '0 auto', maxWidth: '1000px' }}>
          <SectionLabel theme={theme}>Open Source Projects</SectionLabel>
          <p
            style={{
              opacity: 0.8,
              marginBottom: '10px',
              fontFamily: theme.bodyFont,
              fontSize: '16px',
            }}
          >
            Building developer tools, Ethereum libraries, and fintech
            infrastructure used by thousands of developers worldwide.
          </p>
          <ProjectsSection
            theme={theme}
            projects={featuredProjects}
            starCounts={starCounts}
          />
        </section>
      </div>

      {/* Social Section */}
      <div style={{ padding: '80px 40px' }}>
        <section style={{ margin: '0 auto', maxWidth: '1000px' }}>
          <SectionLabel theme={theme}>Connect with Dawson</SectionLabel>
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
                alignItems: 'center',
              }}
            >
              {[
                {
                  href: 'https://twitter.com/dawsonbotsford',
                  Icon: FaTwitterSquare,
                  label: 'Twitter',
                },
                {
                  href: 'https://github.com/dawsbot',
                  Icon: FaGithubSquare,
                  label: 'GitHub',
                },
                {
                  href: 'https://linkedin.com/in/dawsonbotsford',
                  Icon: FaLinkedin,
                  label: 'LinkedIn',
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`${label} - Dawson Botsford`}
                  style={{
                    textDecoration: 'none',
                    color: theme.socialIconColor,
                    transition: 'transform 0.2s, color 0.2s',
                  }}
                >
                  <Icon size="300px" title={label} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <div
        style={{
          backgroundColor: theme.bg,
          color: 'white',
          width: '100vw',
          boxSizing: 'border-box',
          marginTop: '0',
          paddingTop: '80px',
          paddingBottom: '180px',
          paddingLeft: '26px',
          paddingRight: '26px',
          borderTop: '2px solid #1a1a1a',
        }}
      >
        <section
          style={{ margin: '0 auto', maxWidth: '1000px' }}
          id="email-form"
        >
          <SectionLabel theme={theme}>Get in Touch</SectionLabel>
          <p
            style={{
              opacity: 0.8,
              marginBottom: '30px',
              fontFamily: theme.bodyFont,
              fontSize: '16px',
            }}
          >
            Looking for a fractional CTO, AI strategy advisor, or technical
            co-founder? {`Let's`} talk about your project.
          </p>

          <form
            action="https://formspree.io/db-travel@tryninja.io"
            method="POST"
            style={{
              border: '2px solid #1a1a1a',
              backgroundColor: theme.formBg,
              color: theme.formText,
              borderRadius: theme.cardRadius,
              padding: '40px',
            }}
          >
            {['Name', 'Email'].map(field => (
              <label
                key={field}
                htmlFor={field.toLowerCase()}
                style={{
                  display: 'block',
                  fontFamily: theme.bodyFont,
                  fontWeight: 600,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontSize: '16px',
                  color: theme.formText,
                }}
              >
                {field}
                <input
                  type={field === 'Email' ? 'email' : 'text'}
                  name={field === 'Email' ? '_replyto' : 'name'}
                  placeholder={field === 'Email' ? 'Jane@gmail.com' : 'Jane'}
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    border: `1px solid ${theme.inputBorder}`,
                    height: '42px',
                    marginTop: '8px',
                    marginBottom: '20px',
                    borderRadius: '0px',
                    paddingLeft: '20px',
                    fontSize: '17px',
                    fontFamily: theme.bodyFont,
                    backgroundColor: 'white',
                    color: theme.formText,
                    outline: 'none',
                  }}
                />
              </label>
            ))}
            <label
              htmlFor="subject"
              style={{
                display: 'block',
                fontFamily: theme.bodyFont,
                fontWeight: 600,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontSize: '16px',
                color: theme.formText,
              }}
            >
              Subject
              <textarea
                name="subject"
                placeholder="Looking for AI consulting, technical leadership, or open source collaboration..."
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  border: `1px solid ${theme.inputBorder}`,
                  height: '120px',
                  marginTop: '8px',
                  marginBottom: '20px',
                  borderRadius: '0px',
                  paddingLeft: '20px',
                  paddingTop: '14px',
                  paddingBottom: '14px',
                  fontSize: '17px',
                  fontFamily: theme.bodyFont,
                  backgroundColor: 'white',
                  color: theme.formText,
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
            </label>

            <input type="text" name="_gotcha" style={{ display: 'none' }} />

            <input
              type="submit"
              value={theme.submitLabel || 'Send'}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                height: '46px',
                fontSize: '17px',
                fontWeight: 'bold',
                cursor: 'pointer',
                backgroundColor: theme.accent,
                borderColor: theme.accent,
                border: `2px solid ${theme.accent}`,
                color: '#ffffff',
                borderRadius: '0px',
                fontFamily: theme.headingFont,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                transition: 'all 0.2s ease',
              }}
            />
            <p style={{ fontSize: '13px', opacity: 0.5, marginTop: '16px' }}>
              icons from{' '}
              <a
                href="https://icons8.com/"
                style={{
                  textDecoration: 'none',
                  color: theme.formText,
                  opacity: 0.7,
                }}
              >
                icons8
              </a>
            </p>
          </form>
        </section>
      </div>
    </>
  );
}

export default IndexIndex;
