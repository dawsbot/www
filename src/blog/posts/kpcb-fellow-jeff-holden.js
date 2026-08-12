import React from 'react';

// Holden's twelve talking points, as listed in the original post.
const holdenPoints = [
  'Surround yourself with people who make you feel stupid',
  'Minimize Regrets',
  'Obsess over customers, not competitors',
  'No whining',
  'Spend money on what matters to customers',
  'Culture Matters',
  'Take Risks',
  'Optimize for the long term',
  'The press is in the entertainment business',
  'Seek Truth',
  'Get traction fast',
  'The rate of paradigm shifts is increasing',
];

const PostBody = () => (
  <>
    <p>
      KPCB is a very prominent and long living Venture Capitalist firm located
      in the heart of Silicon Valley. They have invested in the most life
      changing startups of my generation, which include Google, Twitter, Uber,
      Shape Security and many others.
    </p>

    <figure className="mark">
      <img
        src="/kleiner-perkins-fellows.png"
        alt="Kleiner Perkins Fellows"
        width={447}
        height={447}
      />
    </figure>

    <p>
      Each year, the recruiting team at KPCB takes on thousands of applicants
      for a highly prestigious program in which{' '}
      <strong>3.2% of applicants become fellows</strong>. If accepted, you
      intern full-time at a KPCB portfolio company while getting the chance to
      attend events throughout the evenings and weekends.
    </p>
    <p>
      {`Being a fellow is hard work and hard play — We sailed the San Francisco
      Bay and heard from Jeff Holden of Uber. I want to spend the rest of this
      post highlighting Jeff Holden's talking points. Many of us forgot to write
      down notes, so this can serve as a notepad to launch back into his ideas.`}
    </p>
    <p>
      As an introduction,{' '}
      <strong>
        Jeff Holden helped create Prime while he was at Amazon and now is the
        Chief Product Officer at Uber.
      </strong>{' '}
      Without further ado in no particular order:
    </p>

    <ol>
      {holdenPoints.map(point => (
        <li key={point}>{point}</li>
      ))}
    </ol>

    <p>
      Originally posted 11–07–2015. Thank you for an awesome time Justin
      Sayarath &amp; Kleiner Perkins!
    </p>
  </>
);

export default PostBody;
