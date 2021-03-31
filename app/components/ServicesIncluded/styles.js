//Experiência completa
export default function () {
  return {
    image: {
      maxHeight: '50px',
      maxWidth: '50px',
    },

    description: {
      fontSize: '1.2rem',
      paddingTop: 12,
    },

    title: {
      paddingBottom: '4rem',

      '& p': {
        width: '100%',
        margin: '0 auto',
        fontSize: '1rem',
        paddingTop: 16,
      },
    },
  };
}
