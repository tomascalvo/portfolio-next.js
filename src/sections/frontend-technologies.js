/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
// placeholder assets
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
// technology icons
import react_logo from 'assets/key-feature/react-logo.png';
import themeui_logo from 'assets/key-feature/themeui-logo.png';
import materialui_logo from 'assets/key-feature/materialui-logo.png';
import bootstrap_logo from 'assets/key-feature/bootstrap-logo.png';

const data = [

  {
    id: 1,
    imgSrc: react_logo,
    altText: 'React',
    title: 'React',
    text:
      'React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. React allows developers to create large web applications that can change data without reloading the page.',
  },
  {
    id: 2,
    imgSrc: themeui_logo,
    altText: 'Theme UI',
    title: 'Theme UI',
    text:
      'Theme UI is a library for creating themeable user interfaces based on constraint-based design principles. Build custom component libraries, design systems, web applications, Gatsby themes, and more with a flexible API for best-in-class developer ergonomics.',
  },
  {
    id: 3,
    imgSrc: materialui_logo,
    altText: 'Material-UI',
    title: 'Material-UI',
    text:
      'Material UI is an open-source, front-end framework for React components.',
  },
  {
    id: 4,
    imgSrc: bootstrap_logo,
    altText: 'Bootstrap',
    title: 'Bootstrap',
    text:
      'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
  },
];

export default function KeyFeature() {
  return (
   <section id="frontend" sx={{ variant: "section.keyFeature" }}>
     <Container>
       <SectionHeader
        slogan="Front End Technologies"
        title="I'm proficient in current front end frameworks."
       />
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
