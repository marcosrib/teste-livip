import React from 'react';
import PropTypes from 'prop-types';

import Box from '@livipdev/core/Box';
import Container from '@livipdev/core/Container';

const Section = ({
  children, component,
  gutterX, gutterY,
  noContainer, noGutter,
  ...props
}) => {
  const paddingY = noGutter ? 0 : gutterY;
  const paddingX = noGutter ? 0 : gutterX;

  
  return (
    <Box {...props} component={component} py={paddingY} px={paddingX}>
      {
        noContainer ? children : (
          <Container>
            {children}
          </Container>
        )
      }
    </Box>
  );
};

Section.defaultProps = {
  component: 'section',
  noContainer: false,
  noGutter: false,
  gutterY: 9,
  gutterX: 0,
};

Section.propTypes = {
  children: PropTypes.any,
  component: PropTypes.string,
  gutterX: PropTypes.number,
  gutterY: PropTypes.number,
  noGutter: PropTypes.bool,
  noContainer: PropTypes.bool,
};

export default Section;
