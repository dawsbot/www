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
    description:
      'An honest snapshot of software engineering in August 2026: full-time vibe-coding, AI reviewing AI, converged frontier models, and local models that are almost good enough.',
    standfirst:
      'What the job actually looks like now that the model is faster than me and writes future bugs.',
    Body: SixMonthsWithoutWritingCode,
  },
];

export const postSlugs = posts.map(post => post.slug);

export const getPostBySlug = slug => posts.find(post => post.slug === slug);
