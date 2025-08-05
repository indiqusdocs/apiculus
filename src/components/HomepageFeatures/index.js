import React from 'react';

const FeatureList = [
  {
    title: 'Service Providers',
    link: '/docs/intro',
    description: 'Click here to read the documents that offer guidance on platform setup, user management, billing, customer support, etc.',
  },
  {
    title: 'Subscribers',
    link: '/docs/Subscribers/intro',
    description: 'Click here to access detailed documentation on all services supported and deliverable via the Apiculus CloudConsole.',
  },
  {
    title: 'Release Notes',
    link: '/docs/category/release-notes',
    description: 'Click here to learn about the new features, enhancements, known issues, and bugs in all the releases till date.',
  },
];

function Feature({ title, description, link }) {
  return (
    <div style={{
      border: '1px solid #000080',
      borderRadius: 12,
      padding: 20,
      margin: 16,
      width: 300,
      boxShadow: '0 4px 8px rgba(0, 120, 212, 0.1)',
    }}>
      <a href={link} style={{ color: 'inherit', textDecoration: 'none' }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      padding: '3rem 0',
      width: '100%',
    }}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
