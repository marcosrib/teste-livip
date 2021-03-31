import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Box from '@livipdev/core/Box';
import Button from '@livipdev/core/Button';
import Typography from '@livipdev/core/Typography';
import Grid from '@livipdev/core/Grid';

import GridWithBackground from './GridWithBackground';
import Section from '../Section';

const EventAbout = ({ event, messages, classes }) => (
  <Section noGutter noContainer>
    <Grid container justify="center">
      <Grid item xs={12} md={10} lg={6}>
        <Section component="div" textAlign="center">
          <Box pb={3}>
            <Typography variant="h2" message={messages.event} gutterBottom />
          </Box>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.shortDescription}
          >
            {event.short_description}
          </Typography>
        </Section>
      </Grid>
    </Grid>
    <Box component="div" bgcolor="grey.background">
      <Grid container>
        <Box component={Grid} item lg={6} py={10} px={6}>
          <Typography variant="h2" gutterBottom>
            {event.about.title}
          </Typography>
          <Box pb={10}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className={classes.longDescription}
              gutterBottom
            >
              <div dangerouslySetInnerHTML={{ __html: event.about.description }} />
            </Typography>
          </Box>
          <Button variant="contained" color="primary" size="large">
            <FormattedMessage {...messages.button} />
          </Button>
        </Box>
        <GridWithBackground item lg={6} background={event.about.cover_url} />
      </Grid>
    </Box>
  </Section>
);

EventAbout.propTypes = {
  event: PropTypes.shape({
    short_description: PropTypes.string,
    about: PropTypes.object,
  }),
  messages: PropTypes.object,
  classes: PropTypes.object,
};

export default EventAbout;
