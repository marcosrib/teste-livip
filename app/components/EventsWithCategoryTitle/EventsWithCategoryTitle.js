import React from 'react';
import Container from '@livipdev/core/Container';
import Title from '@livipdev/core/Title';
import EventList from '@livipdev/core/EventList';
import flow from 'lodash/flow';
import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const EventsWithCategoryTitle = ({ classes, category, events, variant }) => {
  const title = {
    variant: 'h3',
    message: category,
    //message: flow(toLower, startCase)(category),
  };

  return (
    <Container>
      <Title
        title={title}
        align="center"
        customClass={classes.title}
      />
      <EventList
        events={events}
        customClass={classes.list}
        variant='project'
        hideDate={variant === 'held'}
        columns={2}
      />
    </Container>
  );
};

EventsWithCategoryTitle.propTypes = propTypes;
EventsWithCategoryTitle.defaultProps = defaultProps;

export default EventsWithCategoryTitle;
