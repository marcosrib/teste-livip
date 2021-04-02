import { Grid } from "@material-ui/core";

const styles = theme => ({
  tabsBox: {
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: theme.palette.grey[300],
  },


  tabs: {
    '& button': {
      padding: 0,
      

      '& > span': {
        padding: '0 32px',
        borderRightWidth: 1,
        borderRightStyle: 'solid',
        borderRightColor: theme.palette.grey[300],
        transition: '0.4s all ease-in-out',
        fontWeight: 'bold',
        

        '&:last-child': {
          borderRight: 'none',
          
        },

        '&:hover': {
          color: theme.palette.primary.main,
          
        },


        '& .wrapper': {
          fontWeight: 'bold',
          
        }
      },

      '& .selected': {
        '& > span': {
          fontWeight: 'bold',
          
        }
      },

      '&:last-child span': {
        borderRight: 'none',
        
      },
      
    },

    '& > div > span': {
      display: 'none',      
    },

    "& .MuiSvgIcon-root": { 
      //fontSize: "2em" 
      fontSize: '2.2rem'
    },
    
        
    margin: 'auto',
    width: '50%',
    
    
    [theme.breakpoints.down('md')]: {
      width: '100%',
      
    },
    
    
    
  },
  
  
});

export default styles;
