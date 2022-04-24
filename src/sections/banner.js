/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/otrera-dashboard-light.png';
import BannerImg2 from 'assets/strength-dash-gradient-light.png';

import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import Blob1 from 'assets/blob1.svg';
import Blob2 from 'assets/blob2.svg';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Full-Stack Web Developer
          </Heading>
          <Text as="p" variant="heroSecondary">
            My name is Tomás Calvo and I'm a full-stack web developer based in Chattanooga, TN. I'm a self-taught developer currently working independently and I am available for hire.
          </Text>
          {/* <Button variant="primary">
            Explore
          </Button> */}
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg2} alt='banner'/>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    // '&::before': {
    //   position: 'absolute',
    //   content: '""',
    //   bottom: -300,
    //   left: -400,
    //   height: '150%',
    //   width: '200%',
    //   zIndex: -1,
    //   backgroundImage: `url(${Blob1})`,
    //   backgroundRepeat: `no-repeat`,
    //   backgroundPosition: 'bottom left',
    //   backgroundSize: '36%',
    // },
    // '&::after': {
    //   position: 'absolute',
    //   content: '""',
    //   bottom: -300,
    //   right: -300,
    //   height: '150%',
    //   width: '200%',
    //   zIndex: -1,
    //   backgroundImage: `url(${Blob2})`,
    //   backgroundRepeat: `no-repeat`,
    //   backgroundPosition: 'bottom right',
    //   backgroundSize: '32%',
    // },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
        objectFit: "cover"
      },
    },
  },
};
