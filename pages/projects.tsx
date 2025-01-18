/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useContext } from 'react';
import styled from 'styled-components';

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
import Tabs, { TabItems } from '../components/Tabs';
import MansoryLayout from '../components/Mansory';
import MansoryItem from '../components/Mansory/mansory-item';
import { ProjectsContext } from '../components/Utils/context';
import SkillsDonutChart from './skills';

const Projects = () => {
  const projectsData = useContext(ProjectsContext);
  return (
    <Layout title="Project">
      <PageSection>
        <PageWrapper>
          <h1 className="intro__text">Projects.</h1> <br />
          <Tabs>
            <TabItems label="Recent Projects">
              <MansoryLayout>
                {projectsData.map((item, index) => (
                  <MansoryItem key={index} item={item} />
                ))}
              </MansoryLayout>
            </TabItems>
            <TabItems label="Skills Used">
              <SkillsContainer>
                <div className="chart-wrapper">
                  <SkillsDonutChart />
                </div>
              </SkillsContainer>
            </TabItems>
          </Tabs>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
      <FooterLink 
        goto="https://github.com/Rag2003?tab=repositories"
        className="mt-3 mb-5"
        target="_blank"
        style={{ cursor: 'pointer' }}
        onClick={(e) => {
          e.preventDefault();
          window.open("https://github.com/Rag2003?tab=repositories", "_blank");
        }}
        >
        View More Projects.
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const SkillsContainer = styled.div`
  padding: 2rem;
  background: var(--bg-content);
  border-radius: 10px;
  margin: 2rem 0;

  .chart-wrapper {
    width: 100%;
    height: 500px;
    margin: 0 auto;
  }
`;

export const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  button {
    font-size: calc(var(--font-sm) + 1.5px);
    background: var(--mark);
    border: none;
    border-radius: 5px;
    padding: 0px 9px;
  }
`;

export default Projects;