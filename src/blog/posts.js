import SixMonthsWithoutWritingCode from './posts/six-months-without-writing-code';

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
];

export const postSlugs = posts.map(post => post.slug);

export const getPostBySlug = slug => posts.find(post => post.slug === slug);
