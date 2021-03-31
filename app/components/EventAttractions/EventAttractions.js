import React, { useState} from 'react';
import PropTypes from 'prop-types';

import Carousel from '@livipdev/core/Carousel';
import CarouselDots from '@livipdev/core/CarouselDots';
import Typography from '@livipdev/core/Typography';
import Grid from '@livipdev/core/Grid';
import SimpleCard from '@livipdev/core/SimpleCard';
import Box from '@livipdev/core/Box';

import ExperienceCard from './ExperienceCard';
import Section from '../Section';

import { buildBestAttractions } from './builders';


const EventAttractions = ({ classes, event, messages }) => {
  const [cardsPage, setCardsPage] = useState(0);
  const bestAttractions = buildBestAttractions(event.attractions.best);

  return(
    <Section noGutter noContainer>
      <Grid container justify="center">
        <Grid item xs={11} md={10} lg={8}>
          <Section component="div" textAlign="center">
            <Box pb={3}>
              <Typography variant="h2" message={messages.attractions} gutterBottom />
            </Box>
            <Typography variant="subtitle1" color="textSecondary" className={classes.longDescription}>
              {event.attractions.description}
            </Typography>
          </Section>
        </Grid>
      </Grid>
      <Carousel
        infinite
        autoPlay={4000}
        responsive
        slidesPerPage={3}
        breakpoints={{
          599: {
            slidesPerPage: 1,
          },
          960: {
            slidesPerPage: 2,
          },
        }}
      >
        {
          event.attractions.suggested.map((suggestion) => (
            <ExperienceCard background={suggestion.cover_url}>
              <div>
                <Typography variant="subtitle2">{suggestion.name}</Typography>
                <Typography variant="body1">{suggestion.description}</Typography>
              </div>
            </ExperienceCard>
          ))
        }
      </Carousel>

      <Section textAlign="center" >
        <Typography variant="h2" message={{ ...messages.nearby, values: { city: event.city } }} />
      </Section>

      <Carousel 
        value={cardsPage}
        onChange={setCardsPage}
        slidesPerPage={3}
        gutterX={5}
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
        {
          bestAttractions.map(content => (
            <SimpleCard   
              key={content.id}
              content={content} 
              gutterX={1}
              italicDescription
                 
              
            />
            
          ))
        }
      </Carousel>
      
      <CarouselDots
        value={Math.floor(cardsPage/3)}
        onChange={page => setCardsPage(page * 3)}
        length={Math.ceil(bestAttractions.length / 3)}
        customClass={classes.dots}
        inverse
      />
      
    </Section>
  );
};

EventAttractions.propTypes = {
  event: PropTypes.shape({
    attractions: PropTypes.object,
  }),
  messages: PropTypes.object,
};

export default EventAttractions;
