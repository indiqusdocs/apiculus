import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Service Providers',
    Svg: require('@site/static/img/sps.svg').default,
    link: '/docs/intro',
    description:
      'Click here to read the documents that offer guidance on platform setup, user management, billing, customer support, etc.',
  },
  {
    title: 'Subscribers',
    Svg: require('@site/static/img/sbs.svg').default,
    link: '/docs/Subscribers/intro',
    description:
      'Click here to access detailed documentation on all services supported and deliverable via the Apiculus CloudConsole.',
  },
  {
    title: 'Release Notes',
    Svg: require('@site/static/img/rn.svg').default,
    link: '/docs/category/release-notes',
    description:
      'Click here to learn about the new features, enhancements, known issues, and bugs in all the releases till date.',
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className="col col--4">
      <div className={styles.featureBox}>
        <a href={link} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="text--center">
            <Svg className={styles.featureSvg} role="img" />
            <h3>{title}</h3>
          </div>
          <p style={{ padding: '0 10px', textAlign: 'center' }}>{description}</p>
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </section>
    </main>
  );
}
