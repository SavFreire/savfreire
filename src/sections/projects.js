/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Blue from 'assets/feature/blue.svg';
import Yellow from 'assets/feature/yellow.svg';
import Green from 'assets/feature/green.svg';
import Purple from 'assets/feature/purple.svg';

const data = [
  {
    id: 1,
    imgSrc: Blue,
    altText: 'Blog',
    title: 'Blog',
    postLink: 'https://blog.savfreire.com/',
    text:
      'This is a simple blog with a search bar, showing most recent blogs and categorizing the blogs. I also added a cute animation on the homepage. This is not an interactive webpage, it is mainly for admin to add,remove or edit blog pposts. This was one of my first projects',
  },
  {
    id: 2,
    imgSrc: Yellow,
    altText: 'Pets Of Portugal',
    title: 'Pets Of Portugal',
    postLink: 'https://www.petsofportugal.com/',
    text:
      'This is my second project that includes filtering and an email contact page. In the future I will add reviews too.',
  },
  {
    id: 3,
    imgSrc: Green,
    altText: 'TBC',
    title: 'TBC',
    text:
      'I dont know yet.',
  },
  {
    id: 4,
    imgSrc: Purple,
    altText: 'TBC',
    title: 'TBC',
    text:
      'Something with payments .. subscription or marketplace.',
  },
];

export default function Feature() {
  return (
   <section sx={{ variant: 'section.feature'}} id="projects">
     <Container>
       <SectionHeader
       slogan="Projects"
       title="Project Portfolio"
       />

       <Grid sx={styles.grid}>
        {data.map((item) =>(
          <FeatureCard
          key={item.id}
          src={item.imgSrc}
          alt={item.altText}
          title={item.title}
          text={item.text}
          />
        ))}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
