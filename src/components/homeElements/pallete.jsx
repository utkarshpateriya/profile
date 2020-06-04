import React from 'react';
import {makeStyles, Grid, Paper } from '@material-ui/core';
import Object1 from './../furniture/object1.png';
import Object2 from './../furniture/object2.png';

const useStyles = makeStyles((theme) => ({
    box:{
        height:'auto',
        borderRadius:'0',
        margin:'20px 0px',
    }
}));

export default function Pallete(){
    const classes = useStyles();
    return (
        <>
            <Paper elevation={0} className={classes.box} >
            <Grid container spacing={0}>
            <Grid item md={1} xs={0}></Grid>
                <Grid item md={5} xs={12}>
                <img src={Object1}  alt="object1" style={{width:'100%'}} />
                </Grid>
                <Grid item md={5} xs={12}>
                <img src={Object2}  alt="object2" style={{width:'100%'}} />
                </Grid>
                <Grid item md={1} xs={0}></Grid>
            </Grid>
            </Paper>
        </>
    )
}
