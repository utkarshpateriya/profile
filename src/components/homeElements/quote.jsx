import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  quote:{
    display:'flex',
    justifyContent: 'center',
   padding:'40px',
  },
  caption:{
    fontSize:'12px',
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
<>
<Grid container spacing={0}>
          <Grid item xs={12}>
          <Typography className={classes.quote} align='center' variant='h6'>
        “Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.”
            </Typography>
            </Grid>
            <Grid item xs={9}></Grid>
            <Grid item xs={3}>
              <Typography variant='caption' className={classes.caption}>
                  - Attributed to various sources
               </Typography>
            </Grid>
     </Grid>

     </>
  );
}
