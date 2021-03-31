import React from 'react';

import Box from '@livipdev/core/Box';
import Container from '@livipdev/core/Container';
import Grid from '@livipdev/core/Grid';
import Carousel from '@livipdev/core/Carousel';

const Partners = () => (
  <Container>
    <Grid container justify="space-around">
      <Carousel
        autoPlay={4000}
        slidesPerPage={5}
        center
        infinite
        responsive
        breakpoints={{
          599: {
            slidesPerPage: 1,
          },
          960: {
            slidesPerPage: 3,
          },
        }}
      >
        <Box>
          <img src="/img/partners-intel.jpg" role="presentation" alt="Parceiro Intel" />
        </Box>
        <Box>
          <img src="/img/partners-ourofino.jpg" role="presentation" alt="Parceiro Ourofino" />
        </Box>
        <Box>
          <img src="/img/partners-sanofi.jpg" role="presentation" alt="Parceiro Sanofi" />
        </Box>
        <Box>
          <img src="/img/partners-proauto.jpg" role="presentation" alt="Parceiro Proauto" />
        </Box>
        <Box>
          <img src="/img/partners-hp.jpg" role="presentation" alt="Parceiro HP" />
        </Box>
      </Carousel>
    </Grid>
  </Container>
);

export default Partners;
