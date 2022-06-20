/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import TextFeature from 'components/text-feature';
import FeatureThumb from 'assets/me.jpg';
import shapePattern from 'assets/bubble-2.png';

const data = {
  subTitle: 'About Me',
  title: 'Junior Backend Dev',
  description:
    'I am 23 years old from South Africa, living in Portugal. I specialise in Python & Django but I have experience in numerous languages. If you take a look at some of my work you should get an idea of what I am capable of.',
  btnName: 'Github',
  btnURL: 'https://github.com/SavFreire',
};

export default function CoreFeature() {
  return (
   <section sx={{variant: 'section.coreFeature'}} id="about">
    <Container sx={styles.containerBox}>
      <Box sx={styles.contentBox}>
        <TextFeature 
          subTitle={data.subTitle}
          title={data.title}
          description={data.description}
        />
      </Box>
      <Box sx={styles.thumbnail}>
        <Image src={FeatureThumb} alt="Thumbnail" />
        <Box sx={styles.shapeBox}>
          <Image src={shapePattern} alt="Shape"/>
        </Box>
      </Box>
    </Container>
   </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
