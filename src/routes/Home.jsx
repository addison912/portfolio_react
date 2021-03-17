import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import { Header } from "../components/Header";
import { Section } from "../components/Section";

const Home = () => {
  return (
    <ErrorBoundary>
      <Header />
      <Section title="Intro">
        <article>
          <p>
            {
              "I'm a full stack engineer, born and raised in the SF Bay Area. I currently work as a freelance web developer building bespoke websites with custom CMS. I previously worked as a product designer at an experiential marketing company, and most recently as a CX software engineer at Quantum Metric, where I wrote code to gather analytics and consulted for brands such as eBay, Lululemon, AAA, Stubhub, and Western Union."
            }
          </p>
          <p></p>
        </article>
      </Section>
    </ErrorBoundary>
  );
};

export default Home;
