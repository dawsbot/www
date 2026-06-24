import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

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
    href: 'https://earni.fi',
    description:
      'An airdrop checker that found $500 million+ for web3 users. Acquired by Bankless.',
    stars: null,
  },
  {
    title: 'Essential Eth',
    href: 'https://github.com/dawsbot/essential-eth',
    description:
      'A lightweight alternative to ethers.js & web3.js. 10x smaller bundle size.',
    stars: 308,
  },
  {
    title: 'Eth Labels',
    href: 'https://github.com/dawsbot/eth-labels',
    description:
      'A public dataset of labeled Ethereum addresses for the crypto ecosystem.',
    stars: 281,
  },
  {
    title: 'Drain',
    href: 'https://github.com/dawsbot/drain',
    description:
      'Drain a wallet of ERC-20 tokens across Ethereum, Polygon, and Arbitrum. Fast.',
    stars: 231,
  },
  {
    title: 'Mailto',
    href: 'https://mailto.vercel.app',
    description: 'A web app for creating email mailto links instantly.',
    stars: 226,
  },
  {
    title: 'Swim',
    href: 'https://github.com/dawsbot/swim',
    description: 'Switch between multiple vimrc files with ease.',
    stars: 84,
  },
  {
    title: 'RelativePath',
    href: 'https://github.com/dawsbot/RelativePath',
    description: 'VS Code extension for inserting relative file paths.',
    stars: 71,
  },
  {
    title: 'Vimrc Builder',
    href: 'https://vimrc-builder.vercel.app',
    description: 'A visual web app for building your perfect vimrc file.',
    stars: 56,
  },
  {
    title: 'txn.xyz',
    href: 'https://github.com/dawsbot/txn.xyz',
    description: 'Connect any wallet to web3 instantly.',
    stars: 55,
  },
  {
    title: 'Skrub',
    href: 'https://github.com/dawsbot/skrub',
    description: 'Irreversible file deletion on every operating system.',
    stars: 51,
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

const techStack = [
  { src: '/icons8-react-native.svg', label: 'React' },
  { src: '/icons8-nodejs.svg', label: 'Node.js' },
  { src: '/icons8-ethereum.svg', label: 'Solidity' },
  { src: '/icons8-typescript.svg', label: 'TypeScript' },
];

const socials = [
  {
    href: 'https://twitter.com/dawsonbotsford',
    Icon: FaTwitter,
    name: 'Twitter',
    handle: '@dawsonbotsford',
  },
  {
    href: 'https://github.com/dawsbot',
    Icon: FaGithub,
    name: 'GitHub',
    handle: '@dawsbot',
  },
  {
    href: 'https://linkedin.com/in/dawsonbotsford',
    Icon: FaLinkedinIn,
    name: 'LinkedIn',
    handle: 'in/dawsonbotsford',
  },
];

const css = `
.zx, .zx *, .zx *::before, .zx *::after { box-sizing: border-box; }
.zx {
  --ink:#0e0e0e; --paper:#ffffff; --lime:#c4f000; --gray:#6b6b6b; --line:#e6e6e6;
  --hf:'Archivo','Helvetica Neue',Arial,sans-serif;
  --bf:'Hanken Grotesk','Helvetica Neue',Arial,sans-serif;
  --stripe:repeating-linear-gradient(135deg,#0e0e0e 0,#0e0e0e 14px,#ffffff 14px,#ffffff 28px);
  overflow-x:clip;
  color:var(--ink);
}
.zx .wrap { max-width:1140px; margin:0 auto; padding:0 24px; }

/* hero */
.zx .hero { padding:84px 0 76px; }
.zx .hero-grid { display:grid; grid-template-columns:1.12fr 0.88fr; gap:60px; align-items:center; }
.zx .eyebrow {
  display:inline-flex; align-items:center; gap:12px;
  font-family:var(--hf); font-weight:700; font-size:12px;
  letter-spacing:2.6px; text-transform:uppercase;
}
.zx .eyebrow::before {
  content:""; width:14px; height:14px; flex:none;
  background:var(--lime); border:2px solid var(--ink);
}
.zx .name {
  font-family:var(--hf); font-weight:900;
  font-size:clamp(58px,9vw,120px); line-height:0.9;
  letter-spacing:-0.022em; text-transform:uppercase;
  margin:22px 0 0;
}
.zx .typed-line {
  font-size:clamp(17px,2.2vw,23px); font-weight:500;
  margin:22px 0 0; min-height:34px;
}
.zx .typed-cursor { color:var(--lime); font-weight:400; }
.zx .bio-lead { max-width:450px; margin:18px 0 0; font-size:16px; line-height:1.6; color:var(--gray); }
.zx .cta-row { display:flex; flex-wrap:wrap; align-items:center; gap:22px; margin-top:34px; }

/* buttons */
.zx .btn-lime {
  display:inline-flex; align-items:center; gap:10px;
  background:var(--lime); color:var(--ink); border:2px solid var(--ink);
  padding:16px 28px; font-family:var(--hf); font-weight:800;
  font-size:13.5px; letter-spacing:1.8px; text-transform:uppercase;
  text-decoration:none; cursor:pointer;
  box-shadow:6px 6px 0 var(--ink);
  transition:transform .12s ease, box-shadow .12s ease;
}
.zx .btn-lime:hover { transform:translate(3px,3px); box-shadow:3px 3px 0 var(--ink); }
.zx .btn-lime:active { transform:translate(6px,6px); box-shadow:0 0 0 var(--ink); }
.zx .btn-ghost {
  display:inline-flex; align-items:center; gap:8px;
  font-family:var(--hf); font-weight:700; font-size:12.5px;
  letter-spacing:1.8px; text-transform:uppercase;
  color:var(--ink); text-decoration:none;
  border-bottom:3px solid var(--ink); padding-bottom:3px;
  transition:color .15s ease, border-color .15s ease;
}
.zx .btn-ghost:hover { color:var(--gray); border-color:var(--lime); }

/* hero photo */
.zx .photo-stack { position:relative; width:100%; max-width:420px; margin-left:auto; }
.zx .photo-stripe {
  position:absolute; top:22px; left:22px; right:-22px; bottom:-22px;
  background:var(--stripe); z-index:0;
}
.zx .photo-frame {
  position:relative; z-index:1; border:2px solid var(--ink);
  background:var(--paper); line-height:0;
}
.zx .photo-img { display:block; width:100%; height:auto; }
.zx .wave {
  position:absolute; z-index:2; top:-22px; left:-22px;
  width:62px; height:62px; background:var(--paper);
  border:2px solid var(--ink);
  display:flex; align-items:center; justify-content:center;
  font-size:30px;
}

/* striped divider */
.zx .divider {
  height:30px; background:var(--stripe);
  border-top:2px solid var(--ink); border-bottom:2px solid var(--ink);
  animation:zx-slide 6s linear infinite;
}
@keyframes zx-slide { from { background-position:0 0; } to { background-position:396px 0; } }

/* bands */
.zx .band-dark { background:var(--ink); color:var(--paper); padding:96px 0; }
.zx .band-light { background:var(--paper); color:var(--ink); padding:96px 0; }

/* section heads */
.zx .sec-kicker {
  display:inline-flex; align-items:center; gap:10px;
  font-family:var(--hf); font-weight:700; font-size:12px;
  letter-spacing:2.6px; text-transform:uppercase;
}
.zx .sec-kicker .dot { width:12px; height:12px; flex:none; background:var(--lime); }
.zx .sec-title {
  font-family:var(--hf); font-weight:900;
  font-size:clamp(40px,6.4vw,84px); line-height:0.92;
  letter-spacing:-0.018em; text-transform:uppercase; margin:16px 0 0;
}
.zx .sec-intro { max-width:580px; margin:20px 0 0; font-size:16px; line-height:1.6; }
.zx .band-dark .sec-intro { color:#bdbdbd; }
.zx .band-light .sec-intro { color:var(--gray); }

/* about */
.zx .bio { margin-top:42px; }
.zx .bio p { max-width:700px; font-size:17px; line-height:1.72; color:#d6d6d6; margin:0 0 18px; }
.zx .bio strong { color:var(--lime); font-weight:700; }
.zx .subhead {
  font-family:var(--hf); font-weight:800; font-size:13px;
  letter-spacing:2.6px; text-transform:uppercase; color:var(--lime);
  margin:54px 0 0;
}
.zx .chips { display:flex; flex-wrap:wrap; gap:8px; margin-top:20px; }
.zx .chip {
  font-family:var(--hf); font-weight:700; font-size:11.5px;
  letter-spacing:1.4px; text-transform:uppercase; color:var(--paper);
  border:1.5px solid rgba(255,255,255,0.32); padding:8px 13px;
  transition:background .15s ease, color .15s ease, border-color .15s ease;
}
.zx .chip:hover { background:var(--lime); color:var(--ink); border-color:var(--lime); }
.zx .tiles { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-top:22px; max-width:680px; }
.zx .tile {
  aspect-ratio:1/1; border:2px solid rgba(255,255,255,0.24);
  display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px;
  transition:border-color .15s ease, transform .15s ease;
}
.zx .tile:hover { border-color:var(--lime); transform:translateY(-4px); }
.zx .tile img { height:52px; width:auto; }
.zx .tile span {
  font-family:var(--hf); font-weight:700; font-size:11px;
  letter-spacing:1.4px; text-transform:uppercase; color:var(--paper);
}

/* projects */
.zx .proj-grid {
  display:grid; grid-template-columns:repeat(auto-fit,minmax(270px,1fr));
  gap:2px; background:var(--ink); border:2px solid var(--ink); margin-top:40px;
}
.zx .proj-card {
  position:relative; display:block; overflow:hidden;
  background:var(--paper); color:var(--ink); text-decoration:none;
  padding:34px 24px 26px;
  transition:background .18s ease, color .18s ease;
}
.zx .proj-num {
  position:absolute; top:4px; right:16px;
  font-family:var(--hf); font-weight:900; font-size:74px; line-height:1;
  color:var(--line); user-select:none; transition:color .18s ease;
}
.zx .proj-title {
  position:relative; font-family:var(--hf); font-weight:800;
  font-size:21px; letter-spacing:0.5px; text-transform:uppercase; margin:0 0 8px;
}
.zx .proj-desc {
  position:relative; font-size:13.5px; line-height:1.62;
  color:var(--gray); margin:0 0 16px; transition:color .18s ease;
}
.zx .proj-star {
  position:relative; display:inline-flex; align-items:center; gap:5px;
  font-family:var(--hf); font-weight:700; font-size:12px; letter-spacing:0.5px;
  background:var(--ink); color:var(--paper); padding:4px 11px;
  transition:background .18s ease, color .18s ease;
}
.zx .proj-card::after {
  content:""; position:absolute; right:0; bottom:0; width:46px; height:46px;
  background:var(--stripe); clip-path:polygon(100% 0,100% 100%,0 100%);
  opacity:0; transition:opacity .18s ease;
}
.zx .proj-card:hover { background:var(--ink); color:var(--paper); }
.zx .proj-card:hover .proj-desc { color:#c4c4c4; }
.zx .proj-card:hover .proj-num { color:var(--lime); }
.zx .proj-card:hover .proj-star { background:var(--lime); color:var(--ink); }
.zx .proj-card:hover::after { opacity:1; }
.zx .proj-cta { display:flex; flex-direction:column; justify-content:center; background:var(--lime); color:var(--ink); }
.zx .proj-cta .proj-num { color:rgba(14,14,14,0.14); }
.zx .proj-cta:hover { background:var(--ink); color:var(--lime); }
.zx .proj-cta:hover .proj-num { color:rgba(196,240,0,0.22); }
.zx .cta-label {
  position:relative; font-family:var(--hf); font-weight:900; font-size:23px;
  letter-spacing:0.5px; text-transform:uppercase; margin:0;
}
.zx .cta-sub {
  position:relative; font-family:var(--hf); font-weight:700; font-size:12.5px;
  letter-spacing:1px; text-transform:uppercase; margin:10px 0 0;
}

/* connect */
.zx .connect-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin-top:38px; }
.zx .connect-tile {
  display:flex; align-items:center; gap:14px;
  border:2px solid rgba(255,255,255,0.3); padding:20px 22px;
  text-decoration:none; color:var(--paper);
  transition:background .15s ease, color .15s ease, border-color .15s ease;
}
.zx .connect-tile:hover { background:var(--lime); color:var(--ink); border-color:var(--lime); }
.zx .ct-icon { flex:none; display:flex; }
.zx .ct-meta { display:flex; flex-direction:column; line-height:1.35; }
.zx .ct-name {
  font-family:var(--hf); font-weight:800; font-size:14px;
  letter-spacing:1px; text-transform:uppercase;
}
.zx .ct-handle { font-size:12.5px; opacity:0.7; }
.zx .ct-arrow {
  margin-left:auto; font-family:var(--hf); font-weight:800; font-size:18px;
  transition:transform .15s ease;
}
.zx .connect-tile:hover .ct-arrow { transform:translateX(4px); }

/* contact form */
.zx .form-wrap { margin-top:48px; }
.zx .form { background:var(--paper); color:var(--ink); padding:38px; box-shadow:10px 10px 0 var(--lime); }
.zx .field { display:block; margin-bottom:20px; }
.zx .field-label {
  display:block; font-family:var(--hf); font-weight:700; font-size:11.5px;
  letter-spacing:1.6px; text-transform:uppercase; margin-bottom:8px;
}
.zx .field-input, .zx .field-textarea {
  width:100%; border:2px solid var(--ink); background:var(--paper); color:var(--ink);
  font-family:var(--bf); font-size:16px; padding:12px 14px; outline:none;
  transition:box-shadow .12s ease;
}
.zx .field-input { height:50px; }
.zx .field-textarea { height:130px; resize:vertical; }
.zx .field-input:focus, .zx .field-textarea:focus { box-shadow:inset 0 0 0 2px var(--lime); }
.zx .field-input::placeholder, .zx .field-textarea::placeholder { color:#a8a8a8; }
.zx .btn-submit { width:100%; justify-content:center; box-shadow:none; }
.zx .btn-submit:hover { transform:none; box-shadow:none; background:var(--ink); color:var(--lime); }
.zx .form-note { margin:16px 0 0; font-size:12.5px; color:var(--gray); }
.zx .form-note a { color:var(--ink); }

/* footer */
.zx .footer { background:var(--paper); color:var(--ink); border-top:2px solid var(--ink); }
.zx .footer-inner {
  display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between;
  gap:14px; padding:26px 0;
}
.zx .footer-mark {
  font-family:var(--hf); font-weight:900; font-size:15px;
  letter-spacing:1px; text-transform:uppercase;
}
.zx .footer-inner span { font-size:12.5px; color:var(--gray); }
.zx .footer-inner a { color:var(--ink); font-weight:600; }

/* entrance */
.zx .reveal { opacity:0; transform:translateY(20px); animation:zx-reveal .7s cubic-bezier(.2,.7,.2,1) forwards; }
@keyframes zx-reveal { to { opacity:1; transform:translateY(0); } }

@media (max-width:880px) {
  .zx .hero-grid { grid-template-columns:1fr; gap:48px; }
  .zx .photo-stack { margin:0 auto; max-width:360px; }
  .zx .tiles { grid-template-columns:repeat(2,1fr); max-width:420px; }
  .zx .connect-grid { grid-template-columns:1fr; }
}
@media (max-width:560px) {
  .zx .band-dark, .zx .band-light { padding:64px 0; }
  .zx .hero { padding:54px 0 56px; }
  .zx .form { padding:24px; }
  .zx .proj-grid { grid-template-columns:1fr; }
}
@media (prefers-reduced-motion:reduce) {
  .zx .reveal { animation:none; opacity:1; transform:none; }
  .zx .divider { animation:none; }
  .zx .tile:hover, .zx .btn-lime:hover, .zx .btn-lime:active { transform:none; }
}
`;

function SectionHead({ index, kicker, title, intro }) {
  return (
    <header>
      <span className="sec-kicker">
        <span className="dot" />
        {index} / {kicker}
      </span>
      <h2 className="sec-title">{title}</h2>
      {intro && <p className="sec-intro">{intro}</p>}
    </header>
  );
}

function ProjectCard({ project, index, stars }) {
  return (
    <a
      className="proj-card"
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="proj-num">{String(index + 1).padStart(2, '0')}</span>
      <h3 className="proj-title">{project.title}</h3>
      <p className="proj-desc">{project.description}</p>
      {stars && (
        <span className="proj-star">
          <span aria-hidden="true">★</span> {stars}
        </span>
      )}
    </a>
  );
}

function IndexIndex({ starCounts }) {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, typedJSOptions);
    }
    return () => {
      if (typedInstance.current) typedInstance.current.destroy();
    };
  }, []);

  return (
    <main className="zx">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* Hero */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow reveal" style={{ animationDelay: '0s' }}>
              Fractional CTO / AI Strategy / Open Source
            </span>
            <h1 className="name reveal" style={{ animationDelay: '0.08s' }}>
              Dawson
              <br />
              Botsford
            </h1>
            <p className="typed-line reveal" style={{ animationDelay: '0.16s' }}>
              {`I'm `}
              <span ref={typedRef} />
              {` who ❤️'s the web`}
            </p>
            <p className="bio-lead reveal" style={{ animationDelay: '0.24s' }}>
              Technology leader building AI-integrated products, fintech
              infrastructure, and open-source tools used by thousands of
              developers.
            </p>
            <div className="cta-row reveal" style={{ animationDelay: '0.32s' }}>
              <a className="btn-lime" href="#contact">
                {`Let's talk`} <span aria-hidden="true">→</span>
              </a>
              <Link className="btn-ghost" href="/resume">
                View resume <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <div className="photo-stack">
              <div className="photo-stripe" aria-hidden="true" />
              <div className="photo-frame">
                <Image
                  className="photo-img"
                  src="/my-face.jpg"
                  alt="Dawson Botsford, CTO, AI strategist, and open source engineer"
                  width={460}
                  height={460}
                  priority
                />
              </div>
              <span className="wave" role="img" aria-label="waving hand">
                👋
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" aria-hidden="true" />

      {/* About */}
      <section className="band-dark">
        <div className="wrap">
          <SectionHead index="01" kicker="Background" title="About" />
          <div className="bio">
            <p>
              Dawson Botsford is a technology leader specializing in{' '}
              <strong>AI strategy</strong>, fintech infrastructure, and{' '}
              <strong>open source software</strong>. As a{' '}
              <strong>CTO and engineering leader</strong>, he has built products
              in <strong>neobanking</strong>, <strong>blockchain</strong>, and
              developer tools used by thousands of engineers worldwide.
            </p>
            <p>
              With deep expertise in <strong>Ethereum</strong> and web3, he
              founded Earnifi, an airdrop platform that found over $500M for
              crypto users before being acquired by Bankless. He builds{' '}
              <strong>AI-integrated products</strong> and advises companies on{' '}
              <strong>AI consulting</strong> and technical strategy.
            </p>
          </div>

          <p className="subhead">Areas of Expertise</p>
          <div className="chips">
            {expertiseAreas.map(area => (
              <span key={area} className="chip">
                {area}
              </span>
            ))}
          </div>

          <p className="subhead">Core Stack</p>
          <div className="tiles">
            {techStack.map(tech => (
              <div key={tech.label} className="tile">
                <img src={tech.src} alt={`${tech.label} logo`} />
                <span>{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="band-light">
        <div className="wrap">
          <SectionHead
            index="02"
            kicker="Selected Work"
            title="Open Source"
            intro="Developer tools, Ethereum libraries, and fintech infrastructure used by thousands of developers worldwide."
          />
          <div className="proj-grid">
            {featuredProjects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                stars={
                  (starCounts && starCounts[project.href]) || project.stars
                }
              />
            ))}
            <a
              className="proj-card proj-cta"
              href="https://github.com/dawsbot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="proj-num">
                {String(featuredProjects.length + 1).padStart(2, '0')}
              </span>
              <p className="cta-label">See all repos</p>
              <p className="cta-sub">
                github.com/dawsbot <span aria-hidden="true">→</span>
              </p>
            </a>
          </div>
        </div>
      </section>

      <div className="divider" aria-hidden="true" />

      {/* Connect + Contact */}
      <section className="band-dark" id="contact">
        <div className="wrap">
          <SectionHead
            index="03"
            kicker="Say Hello"
            title="Get in Touch"
            intro="Looking for a fractional CTO, AI strategy advisor, or technical co-founder? Let's talk about your project."
          />

          <div className="connect-grid">
            {socials.map(({ href, Icon, name, handle }) => (
              <a
                key={name}
                className="connect-tile"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} profile of Dawson Botsford`}
              >
                <span className="ct-icon">
                  <Icon size={24} />
                </span>
                <span className="ct-meta">
                  <span className="ct-name">{name}</span>
                  <span className="ct-handle">{handle}</span>
                </span>
                <span className="ct-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>

          <div className="form-wrap">
            <form
              className="form"
              action="https://formspree.io/db-travel@tryninja.io"
              method="POST"
            >
              <label className="field" htmlFor="name">
                <span className="field-label">Name</span>
                <input
                  className="field-input"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                />
              </label>
              <label className="field" htmlFor="email">
                <span className="field-label">Email</span>
                <input
                  className="field-input"
                  id="email"
                  type="email"
                  name="_replyto"
                  placeholder="jane@gmail.com"
                />
              </label>
              <label className="field" htmlFor="subject">
                <span className="field-label">Message</span>
                <textarea
                  className="field-textarea"
                  id="subject"
                  name="subject"
                  placeholder="Looking for AI consulting, technical leadership, or open source collaboration..."
                />
              </label>

              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              <button className="btn-lime btn-submit" type="submit">
                Send it <span aria-hidden="true">→</span>
              </button>

              <p className="form-note">
                Icons from{' '}
                <a href="https://icons8.com/" rel="noopener noreferrer">
                  icons8
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="wrap footer-inner">
          <span className="footer-mark">Dawson Botsford</span>
          <span>© 2026 · Built with React. Hosted on the open web.</span>
        </div>
      </footer>
    </main>
  );
}

export default IndexIndex;
