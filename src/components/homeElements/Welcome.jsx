import React from 'react';
import { makeStyles, Typography, Grid, Paper, Divider } from '@material-ui/core';
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
    [theme.breakpoints.up('xs')]: {
      padding:'0px',
      margin:'0px',
      fontSize:'40px'
    },
    [theme.breakpoints.up('xs')]: {
      padding:'0px',
      margin:'0px',
      fontSize:'60px',
      marginBottom:'80px',
    },
  },
  content:{
    fontFamily:'Ubuntu',
    fontStyle:'italic',
    padding:'0px 60px 0px 60px',
  },
  story:{
    height:'600px',
  },
  storyWrapDiv:{
    display:'flex',
    justifyContent:'center',
    height:'auto'
  },
  storyImg:{
    height:'500px',
    [theme.breakpoints.up('xs')]: {
      borderLeft:'none',
    },
    [theme.breakpoints.up('sm')]: {
      borderLeft:'none',
    },
    [theme.breakpoints.up('md')]: {
      borderLeft:'1px solid grey',
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
              <Typography variant='body1' paragraph='true' align='left' style={{}} className={classes.content}>
                I'm a multi-talented human. Most of my time I design and build 
                digital products. You can also call me a product designer,
                experience designer, interaction, UI, UX, or by any other market
                defined function-title. I have experience in a wide range of design 
                disciplines, I'm also a manager, advisor, entrepreneur, front-end 
                developer, music enthusiast,
                traveler, photographer, and more.
                I'm a multi-talented human. Most of my time I design and build 
                digital products. You can also call me a product designer,
                experience designer, interaction, UI, UX, or by any other market
                defined function-title. I have experience in a wide range of design 
                disciplines, I'm also a manager, advisor, entrepreneur, front-end 
                developer, music enthusiast,
                traveler, photographer, and more.
                I'm a multi-talented human. Most of my time I design and build 
                digital products. You can also call me a product designer,
                experience designer, interaction, UI, UX, or by any other market
                defined function-title. I have experience in a wide range of design 
                disciplines, I'm also a manager, advisor, entrepreneur, front-end 
                developer, music enthusiast,
                traveler, photographer, and more.
                I'm a multi-talented human. Most of my time I design and build 
                digital products. You can also call me a product designer,
                experience designer, interaction, UI, UX, or by any other market
                defined function-title. I have experience in a wide range of design 
                disciplines, I'm also a manager, advisor, entrepreneur, front-end 
                developer, music enthusiast,
                traveler, photographer, and more.
                I'm a multi-talented human. Most of my time I design and build 
                digital products. You can also call me a product designer,
                experience designer, interaction, UI, UX, or by any other market
                defined function-title. I have experience in a wide range of design 
                disciplines, I'm also a manager, advisor, entrepreneur, front-end 
                developer, music enthusiast,
                traveler, photographer, and more.
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
