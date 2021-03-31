
import React, { useState , useEffect} from 'react';
import PropTypes from 'prop-types';

import Carousel from '@livipdev/core/Carousel';
import CarouselDots from '@livipdev/core/CarouselDots';
import ProjectCard from '@livipdev/core/ProjectCard';
import { SCREEN_SIZES } from '@livipdev/core/styles/theme/constants';
import Box from '@livipdev/core/Box';
import Typography from '@livipdev/core/Typography';

import Section from '../Section';
//SEÇÃO "OUTROS" DA PÁGINA DE DETALHE DO EVENTO


const EventMoreEvents = ({ classes, event, messages }) => {
  const [page, setPage] = useState(0);
  console.log(event)

  
  return (

    <Section bgcolor="grey.background" textAlign="center" gutterY={15}>
      <Box pb={1} >
        <Typography variant="h2" message={messages.otherEvents} gutterBottom />
      </Box>

      <Box maxWidth={500} mx='auto'>
        {/* <Typography variant="subtitle1" message={messages.otherEventsSubtitle} color="textSecondary" /> */}
      </Box>

      <Box py={3} mx='auto' >
        
        <Carousel 
          value={page}
          onChange={setPage}
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
            event.other.events.map(event => (
              <ProjectCard height="140"
                key={event.id}
                parentColumns={4}           
                gutterX={3}
                responsive
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
