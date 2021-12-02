import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import projects from '../projects';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import FrontendTechnologies from '../sections/frontend-technologies';
import ProjectSection from '../sections/project-section';
import BackendTechnologies from '../sections/backend-technologies';
import SkillFinder from '../sections/skill-finder';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Tomás Calvo" />
          <Banner />
          <FrontendTechnologies />
          <ProjectSection data={projects[0]} />
          <BackendTechnologies />
          {
            projects.slice(1).map((project, i) => ((
              <ProjectSection key={i} data={project} />
            )))
          }
          {/* <ProjectSection data={bambergaMinerals} />
          <ProjectSection data={weatherBeach} /> */}
          {/* <SkillFinder />
          <WorkFlow />
          <Package />
          <TeamSection />
          <TestimonialCard /> */} 
        </Layout>
    </ThemeProvider>
  );
}
