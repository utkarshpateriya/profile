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
        fontSize:'26px',
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
                You can also call me an Otaku. Tokyo, Akihabara is one of my 
                favorite place to chill. Because the place is full of Anime madness 
                I feel so excited every time I visit. You can check my vlog for a preview. 
                 That's what I do for fun besides coding.
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
