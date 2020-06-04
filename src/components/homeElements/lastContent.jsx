import React from 'react';
import {makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
box:{
    marginTop:'0px',
},
title:{
    fontFamily:'Ubuntu',
    padding:'20px',
    [theme.breakpoints.down('md')]: {
        fontSize:'30px'
      },
},
contentBox:{
    marginBottom:'0px',
},
content:{
    fontFamily:'Ubuntu',
    fontSize:'22px',
    lineHeight:'40px',
    [theme.breakpoints.down('md')]: {
        fontSize:'16px'
      },
}
}));

export default function LastContent(props){
    const classes = useStyles();
    return (
        <>
          <Grid container className={classes.box}>
                <Grid item xs={2}></Grid>
              <Grid item xs={8} className={classes.contentBox}>
                    <Typography align='center' variant='h2' className={classes.title}>{props.title}</Typography>
                    <Typography align='center' variant='para' className={classes.content}>{props.content}
                    </Typography>
              </Grid>
              <Grid item xs={2}></Grid>
          </Grid>  
        </>
    )
}
