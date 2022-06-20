import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import Skills from '../sections/skills';
import RecentProject from '../sections/recent-project';
import Projects from '../sections/projects';
import About from '../sections/about';
import BlogSection from 'sections/blog-section';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Savannah Gilmour" />
          <Banner />
          <About />
          <Skills />
          <RecentProject />
          <Projects />
          <BlogSection />
        </Layout>
    </ThemeProvider>
  );
}
