import React from 'react';
import { Grid, Typography,makeStyles } from '@material-ui/core';
import { FiMail } from 'react-icons/fi';
import { AiFillTwitterCircle, AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

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
},
icon:{
    transform:'translate(-5px, 4px)',
    marginRight:'10px',
},
icons:{
    color:'white',
    margin:'0px 50px',
    fontSize:'90px'
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
                Contact</Typography>
            </Grid>
            <Grid item xs={3}></Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={8} className={classes.contentBox}>
                <Typography className={classes.content}>
                If you like my work and have some cool projects
                 to work on or just saying casual hi , just send me a direct message at any 
                 of my social links.
                </Typography>
            </Grid>
            <Grid item xs={3}></Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={8} className={classes.contentBox}>

                <Typography className={classes.content}>
                <FiMail className={classes.icon} />
                utkarshpateriya.78@gmail.com
                </Typography>
            </Grid>
            <Grid item xs={3}></Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={8} className={classes.contentBox}>
            <a href="https://twitter.com/78_utkarsh" target="_blank" ><AiFillTwitterCircle className={classes.icons} /></a>
              <a href="https://www.instagram.com/utkarsh29_" target="_blank" ><AiFillInstagram className={classes.icons} /></a>
              <a href="https://github.com/utkarshpateriya" target="_blank" ><AiFillGithub className={classes.icons} /></a>
              <a href="https://in.linkedin.com/in/utkarsh-pateriya-b4103a14b?trk=people-guest_people_search-card" target="_blank" ><AiFillLinkedin className={classes.icons} /></a>
            </Grid>
            <Grid item xs={3}></Grid>

         </Grid>   
        </>
    )
}
