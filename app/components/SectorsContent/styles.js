export default function (theme) {
  return {
    image: {
      display: 'block',
      height: '100%',
      objectFit: 'cover',
      width: '100%',
    },

    title: {
      fontSize: '1.5rem',
      fontWeight: '700',
    },

    description: {
      fontSize: '1rem',
      fontWeight: '300',
      lineHeight: '2rem',
    },

    list: {
      fontSize: '1rem',
      fontWeight: '400',
      padding: '0 4rem',
      listStyle: 'none',
    },

    listItem: {
      marginBottom: '1rem',
      position: 'relative',
      display: 'block',
      '&::before': {
        position: 'absolute',
        top: '8px',
        left: '-30px',
        content: '" "',
        display: 'block',
        width: '15px',
        height: '3px',
        backgroundColor: '#732d50',
        // marginRight: 0.2rem,
      },
    },
   
    carousel: {
      height: '100%',

      '&> div:first-child': {
        height: '100%',

        '&> ul': {
          height: '100%',
        },
      },
    },

    dots: {
      height: 'auto !important',
      top: -89,
    },
  };
}
