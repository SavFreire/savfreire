/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Python from 'assets/key-feature/python.svg';
import Django from 'assets/key-feature/django.svg';
import Nextjs from 'assets/key-feature/nextjs.svg';
import Tailwind from 'assets/key-feature/tailwind.svg';
import Alpinejs from 'assets/key-feature/alpinejs.svg';
import Javascript from 'assets/key-feature/javascript.svg';

const data = [
  {
    id: 1,
    imgSrc: Python,
    altText: 'Python',
    title: 'Python',
  },
  {
    id: 2,
    imgSrc: Django,
    altText: 'Django',
    title: 'Django',
  },
  {
    id: 3,
    imgSrc: Nextjs,
    altText: 'NextJS',
    title: 'NextJS',
  },
  {
    id: 4,
    imgSrc: Tailwind,
    altText: 'Tailwind CSS',
    title: 'Tailwind CSS',
  },
  {
    id: 4,
    imgSrc: Alpinejs,
    altText: 'AlpineJS',
    title: 'AlpineJS',
  },
  {
    id: 4,
    imgSrc: Javascript,
    altText: 'JavaScript',
    title: 'JavaScript',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{ variant: 'section.keyFeature'}} id="skills">
     <Container>
       <SectionHeader 
       slogan="What are my skills ?"
       title="Take a look at some of the languages I've worked with"
       ></SectionHeader>
       <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCardColumn
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
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
