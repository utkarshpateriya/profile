import React from 'react';
import {makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
box:{
    marginTop:'200px',
},
title:{
    fontFamily:'Ubuntu',
    padding:'20px',
},
contentBox:{
    marginBottom:'400px',
},
content:{
    fontFamily:'Ubuntu',
    fontSize:'22px',
    lineHeight:'40px',
}
}));

export default function LastContent(){
    const classes = useStyles();
    return (
        <>
          <Grid container className={classes.box}>
                <Grid item xs={2}></Grid>
              <Grid item xs={8} className={classes.contentBox}>
                    <Typography align='center' variant='h2' className={classes.title}>Thanks for visiting</Typography>
                    <Typography align='center' variant='para' className={classes.content}>Everyone loves to feel appreciated, which is why thank
                     you notes are still an important way to express your gratitude. Whether you're sending
                    a thank you for a generous wedding gift or showing your enthusiasm after a job interview, 
                    a carefully crafted thank you note is an excellent way to express to the recipient that 
                    you recognize the effort they made on your behalf.
                    </Typography>
              </Grid>
              <Grid item xs={2}></Grid>
          </Grid>  
        </>
    )
}
