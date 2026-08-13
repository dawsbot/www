import SixMonthsWithoutWritingCode from './posts/six-months-without-writing-code';
import KpcbFellowJeffHolden from './posts/kpcb-fellow-jeff-holden';

// Newest first. `Body` is a React component so posts can use real JSX/markup,
// while everything above it stays JSON-serializable for getStaticProps.
export const posts = [
  {
    slug: 'six-months-without-writing-code',
    title: 'Six Months Without Writing a Line of Code',
    date: '2026-08-12',
    dateLabel: 'August 12, 2026',
    readingTime: '5 min read',
    // Dawson's own words. Never write voiced copy for him — see the blog card,
    // the subtitle, and the meta/OG description, which all read from here.
    description: `What it's like today as a software engineer.`,
    // Factual index labels for llms.txt — not prose, not shown on the site.
    topics: [
      'vibe-coding full-time',
      'mixing frontier models for code review',
      'Opus 5 / Sol 5.6 / Grok 4.5',
      'the job market and AI bubble',
      'running local models with LMStudio',
    ],
    Body: SixMonthsWithoutWritingCode,
  },
  {
    slug: 'kpcb-fellow-jeff-holden',
    title: `What’s it like to be a KPCB Fellow and Hear from Jeff Holden?`,
    // Originally posted 2015-11-07; published to Medium 2016-07-06.
    date: '2015-11-07',
    dateLabel: 'November 7, 2015',
    readingTime: '2 min read',
    description: `Notes from a Kleiner Perkins Fellows evening with Jeff Holden of Uber.`,
    topics: [
      'the Kleiner Perkins Fellows program',
      `Jeff Holden's talking points`,
    ],
    originalUrl:
      'https://medium.com/@dawsonbotsford/whats-it-like-to-be-a-kpcb-fellow-and-hear-from-jeff-holden-a38c658cf2c9',
    Body: KpcbFellowJeffHolden,
  },
];

export const postSlugs = posts.map(post => post.slug);

export const getPostBySlug = slug => posts.find(post => post.slug === slug);
