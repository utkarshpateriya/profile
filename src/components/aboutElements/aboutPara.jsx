import React from 'react';
import { Grid, Typography,makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    box:{
        margin:'100px 0px'
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
    title:{
        fontSize:'66px'
    }
}));

export default function AboutPara(props){
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.box}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                <Typography align='center'  className={classes.title}>
                    {props.title}
                    </Typography>
                    <Typography  className={classes.content}>
                    {props.content}
                    </Typography>
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </>
    )
}
