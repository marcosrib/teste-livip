import React from 'react';
import EmptySpace from '@livipdev/core/EmptySpace';
import Box from '@livipdev/core/Box';
import Layout from '../Layout';
import EventsWithCategoryTitle from '../../components/EventsWithCategoryTitle';
import HighlightedEvents from '../HighlightedEvents';

import { response } from '../../api/nextEvents';

//Lista de próximos Eventos

const Events = () => (
  <Layout topGutter={150}>
    <EventsWithCategoryTitle
      category='Próximos eventos'
      events={response}
      variant='project'
    />
   
    <EmptySpace height={100} />
    <Box style={{marginBottom: "-56px"}}>
    <HighlightedEvents />
    </Box>
  </Layout>
  
  
);

export default Events;
