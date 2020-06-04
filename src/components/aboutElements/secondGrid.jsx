import React from 'react';
import { Grid, Typography,makeStyles } from '@material-ui/core';
import ImageOne from './../furniture/about.png'

const useStyles = makeStyles((theme) => ({
    youtubeBox:{ 
        height:'auto',
        margin:'100px 0px'
    },
    video:{
        width:'600px',
        height:'337px',
        [theme.breakpoints.down('md')]: {
            width:'450px',
            height:'253px',
          },
          [theme.breakpoints.down('sm')]: {
            width:'300px',
            height:'169px',
          },
    },
    content:{
        fontSize:'22px',
        lineheight:'30px',
        [theme.breakpoints.down('sm')]: {
            fontSize:'22px'
          },
          [theme.breakpoints.down('xs')]: {
            fontSize:'16px'
          },
    }
}));

export default function AboutIntro(){
    const classes = useStyles();
    return (
        <>
        <Grid container spacing={2} className={classes.youtubeBox} align='center'>
        <Grid item xs={0} md={1} />
            <Grid item xs={12} md={5}  style={{padding:'40px'}}>
                <Typography align='left' className={classes.content}>
                I'm a bit of a digital product junky. Over the years, 
                I've used hundreds of web and mobile apps in different 
                industries and verticals. Eventually, I decided that it would 
                be a fun challenge to try designing and building my own.
                </Typography>
                <Typography align='left' className={classes.content}>
                I'm a bit of a digital product junky. Over the years, 
                I've used hundreds of web and mobile apps in different 
                industries and verticals. Eventually, I decided that it would 
                be a fun challenge to try designing and building my own.
                </Typography>
            </Grid>  
            <Grid item xs={12} md={6} >
            <iframe 
            className={classes.video}
            title='vlog'
            src="https://www.youtube.com/embed/bkIb9oNV7-8" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
            allowfullscreen />
            </Grid>
        </Grid>
        </>
    )
}
