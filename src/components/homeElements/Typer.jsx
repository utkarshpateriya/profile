import React from 'react';
import {Typography, makeStyles, Grid} from '@material-ui/core';
import Typed from 'react-typed';
import { primaryColor } from './../colorPallets';

const useStyles = makeStyles((theme) => ({
    typer: {
        color: `${primaryColor}`,
        position:'absolute',
        top:'40%',
    },
    font: {
        fontFamily: 'Ubuntu',
        fontSize:'5em',
        [theme.breakpoints.down('md')]: {
            fontSize:'2em',
          },
    },
    subfont:{
        fontFamily: 'Ubuntu',
        fontSize:'36px',
        [theme.breakpoints.down('md')]: {
            fontSize:'1em',
          },
    }

}));

export default function Typer(){
    const classes = useStyles();
    return (
        <>
        <Grid align='center' container className={classes.typer}>
        <Grid item xs={12}>
        <Typography className={classes.font}>
                <Typed strings={["Utkarsh Pateriya"]} 
                    typeSpeed={40}/>
                </Typography>
                </Grid>
                <Grid item xs={12}>
        <Typography className={classes.subfont}>
                <Typed strings={["Welcome to my website!", "Full Stack Developer", "Software Engineer", "Flutter Developer",
                "UX/UI Designer","Back-End Developer"]} 
                typeSpeed={40} backSpeed={60} loop/>
        </Typography>
        </Grid>
    </Grid>
    </>
    )
}
