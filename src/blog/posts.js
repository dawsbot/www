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
    Body: KpcbFellowJeffHolden,
  },
];

export const postSlugs = posts.map(post => post.slug);

export const getPostBySlug = slug => posts.find(post => post.slug === slug);
