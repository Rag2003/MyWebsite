import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

const Experience = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <h1 className="intro__text">My Work Experience.</h1> <br />
          <article>
            <div className="experience-grid">
            <ExperienceCard>
                <div className="card-content">
                <h3>Collins Aerospace <span className="position">| Cloud Operations Intern</span></h3>
                <span className="duration">May 2024 - Aug 2024</span>
                <p>
                    ○ Developed Python scripts to automate complex cloud operations, including returning EBS volumes and snapshots with specific configurations, querying VPC Flow Logs within defined time ranges and to manage lifecycles of EC2s.
                    <br />
                    ○ Implemented various cost-saving strategies on AWS, including right-sizing instances, using Reserved Instances, and optimizing resource scheduling. Managed data for cost centers, resource owners and environments, implementing strategies to reduce cloud costs.
                    <br />
                    ○ Leveraged AWS CloudWatch and Lambda functions to implement a sophisticated serverless monitoring system, enabling real-time cost optimization and automated resource management across multiple AWS regions.
                </p>
                </div>
            </ExperienceCard>

            <ExperienceCard>
                <div className="card-content">
                <h3>Casey's <span className="position">| Software Engineer Intern</span></h3>
                <span className="duration">May 2023 - August 2023</span>
                <p>
                    ○ Led quality assurance initiatives in an Agile environment, conducting thorough code reviews and implementing test-driven development practices that resulted in a 40% reduction in production bugs.
                    <br />
                    ○ Architected robust data pipelines and optimized SQL queries, reducing database response time by 60% and improving overall system performance for the retail management system.
                    <br />
                    ○ Spearheaded the development of an innovative role management application and won recognition in the DevJAM competition for creating an AI-powered code conversion tool, demonstrating both technical expertise and creative problem-solving abilities.
                </p>
                </div>
            </ExperienceCard>

            <ExperienceCard>
                <div className="card-content">
                <h3>Soil Serdem <span className="position">| FullStack Software Engineer Intern</span></h3>
                <span className="duration">December 2023 - Feb 2024</span>
                <p>
                    ○ Engineered responsive and performant full-stack applications using modern JavaScript frameworks, implementing best practices in code organization and achieving a 45% improvement in page load times.
                    <br />
                    ○ Orchestrated containerized application deployment using Docker, establishing streamlined CI/CD pipelines that reduced deployment time by 60% and enhanced development workflow consistency.
                </p>
                </div>
            </ExperienceCard>

            <ExperienceCard>
                <div className="card-content">
                <h3>Proplanner <span className="position">| DevOps Intern</span></h3>
                <span className="duration">December 2022 - May 2023</span>
                <p>
                    ○ Developed automation solutions using C# and Java to streamline deployment processes, resulting in a 70% reduction in manual deployment tasks and improved cross-team collaboration between development and operations.
                    <br />
                    ○ Implemented robust troubleshooting procedures using PowerShell scripting and root cause analysis, successfully resolving critical production issues and maintaining 99.9% system uptime across multiple environments.
                    <br />
                    ○ Led incident response and resolution by directly collaborating with clients, utilizing logging tools and metrics analysis to diagnose performance bottlenecks, memory leaks, and thread deadlocks in production applications.
                </p>
                </div>
            </ExperienceCard>
            <ExperienceCard>
                <div className="card-content">
                <h3>Iowa State University <span className="position">| Student IT Technician</span></h3>
                <span className="duration">Aug 2019 - Dec 2023</span>
                <p>
                    ○ Provided comprehensive technical support to faculty and staff, troubleshooting and resolving complex issues with teaching software platforms, learning management systems, and classroom technologies while maintaining a 95% satisfaction rate.
                    <br />
                    ○ Managed and resolved over 500 support tickets through ServiceNow, ensuring timely updates, proper documentation, and efficient escalation procedures while adhering to IT service management best practices.
                </p>
                </div>
            </ExperienceCard>
            <ExperienceCard>
                <div className="card-content">
                <h3>Iowa State University <span className="position">| ISU Athlete Tutor</span></h3>
                <span className="duration">Aug 2019 - Dec 2023</span>
                <p>
                    ○ Provided dedicated academic support to student-athletes in Computer Science, Mathematics, and Physics courses, resulting in an average grade improvement of 35% and helping maintain their athletic eligibility requirements.
                    <br />
                    ○ Developed comprehensive mock exams and practice materials tailored to individual learning needs, implementing regular assessment strategies that helped students track their progress and identify areas for improvement.
                </p>
                </div>
            </ExperienceCard>
            </div>
          </article>
        </PageWrapper>
      </PageSection>
      <PageWrapper>
        <FooterLink goto="/projects" className="mt-3 mb-5">
          Lets Continue To Projects
        </FooterLink>
        <br />
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
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  .experience-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
`;

const ExperienceCard = styled.div`
  background: var(--card-bg);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  isolation: isolate;
  border: 2px solid transparent;
  
  &::before {
    content: " ";
    position: absolute;
    inset: -2px;
    z-index: -1;
    border: inherit;
    border-radius: inherit;
    background-image: conic-gradient(from var(--angle), 
      #2D1B3E 80%, 
      #9D00FF 88%, 
      #7B00CC 92%, 
      #2D1B3E 100%
    );
    background-origin: border-box;
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: spin 3s linear infinite;
  }

  @property --angle {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0turn;
  }

  @keyframes spin {
    to {
      --angle: 1turn;
    }
  }

  &:hover::before {
    animation-play-state: paused;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  .card-content {
    h3 {
      font-size: calc(var(--font-md) + 4px);
      font-weight: 800;
      color: var(--cw);
      margin-bottom: 0.5rem;
      letter-spacing: -0.2px;

      .position {
        font-style: italic;
        font-weight: 500;
        color: #9D00FF;
        opacity: 0.9;
      }
    }

    .duration {
      font-size: calc(var(--font-sm) - 1px);
      color: var(--article-color);
      display: block;
      margin-bottom: 1rem;
    }

    p {
      font-size: calc(var(--font-sm) + 0.9px);
      color: var(--article-color);
      line-height: 1.8;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export default Experience;