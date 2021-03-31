const styles = (theme) => ({
  title: {
    color: theme.palette.common.white,
    marginBottom: '10vh',
    padding: '30px',

    '& > h1': {
      fontSize: '7rem',

      [theme.breakpoints.down('sm')]: {
        fontSize: '3rem',
      },
    },

    '& > h6': {
      fontSize: '2rem',
      fontWeight: 200,
      lineHeight: '1.2',
    },
  },
});

export default styles;
