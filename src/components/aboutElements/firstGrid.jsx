import React from 'react';
import { Grid, Typography,makeStyles, Paper } from '@material-ui/core';
import ImageOne from './../furniture/about.png'

const useStyles = makeStyles((theme) => ({
    image:{
        backgroundImage:`url(${ImageOne})`,
        height:'500px',
        backgroundSize:'cover',
        borderRadius:'0',
        width:'100%',
    },
    panelBox:{
        margin: '100px 0px',
    },
     contentBox:{
         padding:'50px',
     },
    imageBox:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
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
    },
    
}));

export default function AboutIntro(){
    const classes = useStyles();
    return (
        <>
        <Grid container align='center' className={classes.panelBox}>
            <Grid item xs={1} md={1} />
            
            <Grid item xs={12} sm={12} md={5} >
            <div >
            <Paper  className={classes.image} />
            </div>
            </Grid>

            <Grid item sm={12} md={5} className={classes.contentBox}>
                <Typography align='left' className={classes.content}>
                I'm a bit of a digital product junky. Over the years, 
                I've used hundreds of web and mobile apps in different 
                industries and verticals. Eventually, I decided that it would 
                be a fun challenge to try designing and building my own.
                </Typography>
                <Typography align='left' style={{marginTop:'20px'}} className={classes.content}>
                I'm a bit of a digital product junky. Over the years, 
                I've used hundreds of web and mobile apps in different 
                industries and verticals. Eventually, I decided that it would 
                be a fun challenge to try designing and building my own.
                </Typography>
            </Grid>  
            <Grid item xs={1} md={1} />  
        </Grid>
        </>
    )
}
