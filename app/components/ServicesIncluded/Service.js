import React from 'react';
import PropTypes from 'prop-types';

import Box from '@livipdev/core/Box';
import Grid from '@livipdev/core/Grid';
import Typography from '@livipdev/core/Typography';

const Service = ({ classes, description, icon, title }) => {
  const srcSet = `/icons/${icon}.png, /icons/${icon}@2x.png 2x, /icons/${icon}@3x.png 3x`;


  //SEÇÃO DE ÍCONES EM SERVIÇOS
  return (
    
    <Grid item xs={12} sm={6} md={4}>
  

      <Box
        px={3}
        mb={10}
        textAlign="center"
        maxWidth={300}
        mx='auto'
      >
        <Box
          mb={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="50px"
        >
          <img
            className={classes.image}
            src={`/icons/${icon}.png`}
            srcSet={srcSet}
            role="presentation"
            alt={icon}
          />
        </Box>
        <Box
          component={Typography}
          mb={1}
          variant="subtitle2"
          message={title}
        />
        <Typography
          variant="body1"
          color="textSecondary"
          message={description}
          className={classes.description}
        />
      </Box>
    </Grid>
  );
};

Service.propTypes = {
  classes: PropTypes.shape({
    image: PropTypes.string,
    description: PropTypes.string,
  }),
  description: PropTypes.object,
  icon: PropTypes.string,
  title: PropTypes.object,
};

export default Service;
