import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { arrayRandomItem } from 'codewonders-helpers';
import { motion } from 'framer-motion';
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
import { getTransitions } from '../components/Utils';

const Home = () => {
  const [color] = useState(arrayRandomItem(['#37609c', '#34c759', '#5856d6']));

  return (
    <Layout>
      <PageSection color={color}>
        <PageWrapper>
          <ContentWrapper>
            <ProfileImage>
              <img
                src="/icons/Raghus.png"
                alt="Raghuram Guddati"
                className="profile-img"
              />
            </ProfileImage>
            
            <article className="content">
              <motion.h1
                data-text="I'm Raghuram Guddati"
                className="intro__text"
                {...getTransitions(0.1)}
              >
                <mark className="mark">I&apos;m Raghuram Guddati</mark>
              </motion.h1>
              <motion.p {...getTransitions(0.3)}>
                I'm currently pursuing Software Engineering at Iowa State University, where I combine my passion for coding with hands-on experience in cloud management and application development. My journey in tech has led me to explore various aspects of{' '}
                <Link href="/projects" aria-label="Go to Projects Page">
                  Projects
                </Link>{' '}
                from web development to cloud architecture.
              </motion.p>
              <motion.p {...getTransitions(0.5)}>
                When I'm not immersed in code, you'll find me solving puzzles - a hobby that perfectly aligns with my natural curiosity and problem-solving mindset. I'm always eager to learn and explore new technologies, whether through reading{' '}
                articles or working on personal projects. Feel free to{' '}
                <Link href="/contact" aria-label="Go to Contact Page">
                  Contact Me
                </Link>{' '}
                if you'd like to connect or collaborate.
              </motion.p>
            </article>
          </ContentWrapper>

          <motion.div {...getTransitions(0.7)} className="mt-8">
            <FooterLink goto="/about">See More About Me</FooterLink>
          </motion.div>
        </PageWrapper>
      </PageSection>
    </Layout>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5rem;
  margin: 5.5rem 0 2.5rem -5rem; 
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .content {
    flex: 1;
  }
`;

const ProfileImage = styled.div`
  width: 240px;
  height: 240px;
  flex-shrink: 0;
  position: relative;
  margin-top: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: conic-gradient(
      #9D00FF,
      #7B00CC,
      #2D1B3E,
      #9D00FF
    );
    border-radius: 50%;
    animation: rotate 3s linear infinite;
  }

  .profile-img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid var(--bg);  // This creates space between image and rotating border
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const PageSection = styled.div`
  min-height: calc(100vh - 39vh);
  display: flex;
  align-items: center;
  justify-content: center;
  
  .intro__text {
    font-size: 2.275em;
    font-weight: 500;
    margin: 0 0 1.5rem;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 9.9px;

    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &::before {
      left: 2px;
      text-shadow: -1px 0 #00ffff;
      animation: noise-anim-2 15s infinite linear alternate-reverse;
    }

    &::after {
      left: -2px;
      text-shadow: 3px 0 #9D00FF;
      animation: noise-anim 2s infinite linear alternate-reverse;
    }

    @keyframes noise-anim {
      0% { clip-path: inset(29% 0 25% 0); }
      /* ... rest of your existing keyframes ... */
    }
    @keyframes noise-anim-2 {
      0% { clip-path: inset(76% 0 21% 0); }
      /* ... rest of your existing keyframes ... */
    }
  }

  p {
    font-size: calc(var(--font-sm) + 0.9px);
    line-height: 2.3;
    font-weight: 400;
    color: var(--article-color) !important;

    a,button {
      font-size: calc(var(--font-sm) + 0.9px);
      line-height: 20px;
      position: relative;
      border: none;
      font-weight: 800;
      background: transparent;
      text-transform: uppercase;
    }
  }

  @media (max-width: 585px) {
    margin: 3rem 0;
    display: block;
    min-height: 100%;
  }
`;

export default Home;