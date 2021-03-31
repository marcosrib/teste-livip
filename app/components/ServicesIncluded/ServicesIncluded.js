import React from 'react';
import PropTypes from 'prop-types';

import Box from '@livipdev/core/Box';
import Container from '@livipdev/core/Container';
import Title from '@livipdev/core/Title';
import Grid from '@livipdev/core/Grid';

import messages from './messages';
import Service from './Service';

//Bloco experiência completa

const ServicesIncluded = ({ classes }) => {
  const title = {
    variant: 'h2',
    message: messages.title,
  };
  const subtitle = {
    variant: 'body1',
    message: messages.subtitle,
  };

  return (
    <Box mb={5}>
      <Container>
        <Title
          title={title}
          subtitle={subtitle}
          align="center"
          customClass={classes.title}
        />
        <Grid container>
          <Service
            classes={classes}
            description={messages.welcomeDescription}
            icon="services-welcome"
            title={messages.welcomeTitle}
          />
          <Service
            classes={classes}
            description={messages.transportDescription}
            icon="ticket"
            title={messages.transportTitle}
          />
          <Service
            classes={classes}
            description={messages.drinksDescription}
            icon="services-transport"
            title={messages.drinksTitle}
          />
          <Service
            classes={classes}
            description={messages.chatDescription}
            icon="services-chat"
            title={messages.chatTitle}
          />
          <Service
            classes={classes}
            description={messages.gastroDescription}
            icon="services-gastro"
            title={messages.gastroTitle}
          />
          <Service
            classes={classes}
            description={messages.appDescription}
            icon="services-app"
            title={messages.appTitle}
          />
        </Grid>
      </Container>
    </Box>
  );
};

ServicesIncluded.propTypes = {
  classes: PropTypes.shape({
    image: PropTypes.string,
  }),
};

export default ServicesIncluded;
