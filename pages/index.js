import React, { Component } from 'react';

import IndexIndex from '../src/components/Index/IndexIndex';
import { featuredProjects } from '../src/components/Index/IndexIndex';

class Index extends Component {
  render() {
    return <IndexIndex starCounts={this.props.starCounts} />;
  }
}

export async function getStaticProps() {
  const starCounts = {};

  const githubProjects = featuredProjects.filter(p =>
    p.href.startsWith('https://github.com/'),
  );

  await Promise.all(
    githubProjects.map(async project => {
      const slug = project.href.replace('https://github.com/', '');
      try {
        const res = await fetch(`https://api.github.com/repos/${slug}`);
        if (res.ok) {
          const data = await res.json();
          starCounts[project.href] = data.stargazers_count;
        }
      } catch {
        // Fall back to hardcoded value
      }
    }),
  );

  return {
    props: { starCounts },
    revalidate: 3600,
  };
}

export default Index;
