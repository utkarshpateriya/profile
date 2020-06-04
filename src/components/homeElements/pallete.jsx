import React from 'react';
import {makeStyles, Grid, Typography, Paper } from '@material-ui/core';
import Object1 from './../furniture/object1.png';
import Object2 from './../furniture/object2.png';

const useStyles = makeStyles((theme) => ({
    box:{
        height:'400px',
        borderRadius:'0',
        margin:'100px 0px',
    }
}));

export default function Pallete(){
    const classes = useStyles();
    return (
        <>
            <Paper elevation={0} className={classes.box} >
            <Grid container spacing={6}>
            <Grid item xs={1}></Grid>
                <Grid item xs={5}>
                <img src={Object1}  alt="object1" style={{width:'100%'}} />
                </Grid>
                <Grid item xs={5}>
                <img src={Object2}  alt="object2" style={{width:'100%'}} />
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
            </Paper>
        </>
    )
}
