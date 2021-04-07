import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Carousel from '@livipdev/core/Carousel';
import CarouselDots from '@livipdev/core/CarouselDots';
import ProjectCard from '@livipdev/core/ProjectCard';
import { SCREEN_SIZES } from '@livipdev/core/styles/theme/constants';
import Box from '@livipdev/core/Box';
import Typography from '@livipdev/core/Typography';
import {  useTheme } from '@material-ui/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Section from '../Section';

const EventMoreEvents = ({ classes, event, messages }) => {

  const [page, setPage] = useState(0);
  const [isSize, setSize] = useState(0);
  const [isWidth, setWidth] = useState(0);
  const matchesSix = useMediaQuery('(max-width:800px)');
  const matches = useMediaQuery('(min-width:1200px)');
  
 //Detalhe evento

  console.log(matches);

  useEffect(() => {
    if(matches) {
      setSize(3)
    }
   else if(matchesSix) {
      setSize(0.85)
      setWidth(1)
    } else {
      setSize(2)
      setWidth(3)
    }
   
  },[matches,matchesSix])
 

  return (
    <Section bgcolor="grey.background" textAlign="center" gutterY={15}>
      <Box pb={1}>
        <Typography variant="h2" message={messages.otherEvents} gutterBottom />
      </Box>

      <Box maxWidth={500} mx='auto'>
        {/* <Typography variant="subtitle1" message={messages.otherEventsSubtitle} color="textSecondary" /> */}
      </Box>

      <Box py={3}>
        <Carousel
          value={page}
          onChange={setPage}
          slidesPerPage={isWidth}
          gutterX={5}
          responsive
       
        >
          {
            event.other.events.map(event => (
              <ProjectCard  height="140"
        
                key={event.id}
                parentColumns={isSize}
                gutterX={3}
                {...event}
              />
            ))
          }
        </Carousel>
        <CarouselDots
          value={page}
          onChange={setPage}
          length={Math.ceil(event.other.events.length / 3)}
          customClass={classes.dots}
          inverse
        />
      </Box>
    </Section>
  );
};

EventMoreEvents.propTypes = {
  event: PropTypes.shape({
    other: PropTypes.object,
  }),
  messages: PropTypes.object,
};

export default EventMoreEvents;