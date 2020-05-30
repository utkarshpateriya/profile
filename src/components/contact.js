import React from 'react';
import {Grid, Paper, makeStyles  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  imagestyle:{
    fontFamily: 'Ubuntu',
  padding: theme.spacing(9),
  borderRadius: '0',
  textAlign: 'center',
  color: 'white',
  marginTop:'-50px',
  height:'80vh',
  backgroundImage: 'linear-gradient(to right, #2980B9, #6DD5FA)',
backgroundColor:'rgb(0,0,0,1)',
  zIndex: '0',
}
  }));

export default function Contact()  {
    const classes = useStyles();
    return (
      <>
        <Grid container spacing={3}>
         <Grid item xs={12} className={classes.aone}>
         <Paper className={classes.imagestyle}>CONTACT</Paper>
            </Grid> 
            </Grid>
      </>
    )
}


