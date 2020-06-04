import React from 'react';
import { Grid, Typography,makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
box:{
    position:'absolute',
    top:'50px',
    height:'90vh'
},
item:{
    color:'white',
    width:'100%',
},
title:{
    fontSize:'66px',
    [theme.breakpoints.down('sm')]: {
        fontSize:'46px'
      },
},
contentBox:{
    color:'white',
},
content:{
    fontSize:'22px',
    lineheight:'40px',
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
         <Grid container spacing={0} className={classes.box}>
         <Grid item xs={1}></Grid>
            <Grid item xs={8} className={classes.item}>
                <Typography variant='h1' className={classes.title}>
                About</Typography>
            </Grid>
            <Grid item xs={3}></Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={8} className={classes.contentBox}>
                <Typography className={classes.content}>
                Hello! I'm Utkarsh. I make digital products including apps for desktop, android, or iOS, and web applications. 
                </Typography>
            </Grid>
            <Grid item xs={3}></Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={8} className={classes.contentBox}>
                <Typography className={classes.content}>
                You can also call me a product developer, experience designer,
                 interaction, UI, UX, or by any other market defined function-title.
                </Typography>
            </Grid>
            <Grid item xs={3}></Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={8} className={classes.contentBox}>
                <Typography className={classes.content}>
                I'm a bit of a digital product junky. Over the years, 
                I've used hundreds of web and mobile apps in different 
                industries and verticals. Eventually, I decided that it would 
                be a fun challenge to try designing.
                </Typography>
            </Grid>
            <Grid item xs={3}></Grid>

         </Grid>   
        </>
    )
}
