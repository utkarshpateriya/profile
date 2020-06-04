import React from 'react';
import { makeStyles, Typography, Grid, Paper } from '@material-ui/core';
import Story from './../furniture/story.png'

const useStyles = makeStyles((theme) => ({
  container:{
    margin: '100px 0px 100px 0px',
    
  },
  box:{
    padding:'50px',
    borderRadius:'0px'
  },
  title:{
    marginBottom:'80px',
    [theme.breakpoints.down('md')]: {
      fontSize:'30px'
    },
  },
  content:{
    lineHeight:'50px',
    fontSize:'22px',
    fontFamily:'Ubuntu',
    padding:'0px 60px 0px 60px',
    [theme.breakpoints.down('md')]: {
      fontSize:'16px',
      lineHeight:'30px',
    },
  },
  story:{
    height:'600px',
    [theme.breakpoints.down('md')]: {
      height:'400px',
      marginTop:'100px'

    },
  },
  storyWrapDiv:{
    display:'flex',
    justifyContent:'center',
    height:'auto'
  },
  storyImg:{
    height:'500px',
    [theme.breakpoints.up('md')]: {
      borderLeft:'1px solid grey',
    },
    [theme.breakpoints.up('sm')]: {
      borderLeft:'none',
    },
    [theme.breakpoints.up('xs')]: {
      borderLeft:'none',
    },
  }
}));

export default function GridFirst() {
    const classes = useStyles();
    return (
  <>
        <Paper elevation={0}  className = {classes.box}>
            <Typography variant='h2' align='center' className={classes.title}>
              Here's my story
            </Typography>
            <Grid container align='center' spacing={2}>

              <Grid item xs={12} sm={12} md={6}>
              <Typography align='left' className={classes.content}>
              Most of my time I design and build digital products. You can also call 
              me a product designer, experience designer, interaction, UI, UX, or by 
              any other market defined function-title. I have experience in a wide
              range of production disciplines, I'm also an advisor, entrepreneur, full-stack
              developer, music enthusiast, traveler, sportsman, photographer, and 
              more. 
            </Typography>
            <Typography align='left' className={classes.content}>
            I'm a bit of a digital product junky. Over the years, I've used hundreds 
            of web and mobile apps in different industries and verticals.
            Eventually, I decided that it would be a fun challenge to try designing 
            and building my own.
            </Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={6} className={classes.storyImg}>
              <div className={classes.storyWrapDiv}>
              {/* <Paper elevation={2} style={{margin:'60px', transform:'translate(100px, 0px)'}} className={classes.story}>Hello</Paper> */}
              <img alt="story" src={Story}  className={classes.story}/>
              </div>
              </Grid>
            </Grid>
          </Paper>
  </>
  );
}
