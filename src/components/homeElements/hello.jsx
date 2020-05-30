import React from 'react';
import { makeStyles, Typography, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container:{
    margin: '100px 0px 100px 0px',
    
  },
  box:{
    padding:'50px',
    borderRadius:'0px'
  },
  title:{
    marginBottom:'30px'
  },
  content:{
    fontFamily:'Ubuntu',
  },
}));
    
export default function GridFirst() {
    const classes = useStyles();
    return (
  <>
  <Grid container spacing={0} className={classes.container}>
        <Grid item md={2} xs={1}></Grid>
        <Grid item md={8} xs={9} >
        <Paper elevation={0}  className = {classes.box}>
            <Typography variant='h4' align='left' className={classes.title}>
              Hello!
            </Typography>
            <Typography variant='body1' paragraph='true' align='left'>
                I'm a multi-talented human. Most of my time I design and build 
                digital products. You can also call me a product designer,
                experience designer, interaction, UI, UX, or by any other market
                defined function-title. I have experience in a wide range of design 
                disciplines, I'm also a manager, advisor, entrepreneur, front-end 
                developer, music enthusiast,
                traveler, photographer, and more.
            </Typography>
          </Paper>
        </Grid>
        <Grid item md={2} xs={1}></Grid>

  </Grid>
  </>
  );
}
