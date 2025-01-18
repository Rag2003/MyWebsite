import React from 'react';
import styled from 'styled-components';
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

const Resume = () => {
  const googleDriveEmbedLink =
    'https://drive.google.com/file/d/116y2vbwWqlRFeo5alQb9u9AROitMQ2YK/preview'; // Embed link for your Google Drive file.

  return (
    <Layout title="Resume">
      <PageWrapper>
        <PageSection>
          <article>
            <h1 className="intro__text">Resumé.</h1>
            <p>
              Reach out to me via my{' '}
              <b>
                <a href="/contact">contact page</a>
              </b>{' '}
              or{' '}
              <b>
                <a
                  href="https://drive.google.com/file/d/116y2vbwWqlRFeo5alQb9u9AROitMQ2YK/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Resumé on Google Drive"
                >
                  view
                </a>
              </b>{' '}
              or{' '}
              <b>
                <a
                  href="https://drive.google.com/file/d/116y2vbwWqlRFeo5alQb9u9AROitMQ2YK/view?usp=sharing"
                  download
                  rel="noopener noreferrer"
                  aria-label="Download Resumé from Google Drive"
                >
                  download
                </a>
              </b>{' '}
              the resume.
            </p>
          </article>
          <br />
          <iframe
            src={googleDriveEmbedLink}
            allowFullScreen
            width="740"
            height="780"
            title="Raghuram Guddati Resumé"
          />
        </PageSection>
        <br />
        <FooterLink goto="/contact" className="mt-3 mb-5">
          Are you convinced to contact me now?
        </FooterLink>
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }
  iframe {
  width: 100%;
  height: 1000px; /* Adjusted height */
  border: none;
  @media (min-width: 768px) {
    width: 95%; /* Center-aligned for larger screens */
    height: 1085px; /* Increased height for better scaling */
  }
}


`;
export default Resume;
