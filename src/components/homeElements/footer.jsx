import React from 'react';
import { Grid, Typography, makeStyles}from "@material-ui/core";
import { AiFillTwitterCircle, AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md'

const useStyles = makeStyles((theme) => ({
  box:{
    backgroundColor:'black',
    height:'auto',
    marginTop:'200px',
    paddingTop:'50px',
    paddingBottom:'0px',
  },
  icons:{
    fontSize:'60px',
    color:'white',
    margin:'10px',
    paddingBottom:'50px',
    [theme.breakpoints.down('md')]: {
      fontSize:'36px',
      
    },
  },
  text:{
    fontFamily:'Ubuntu',
    fontSize:'20px',
    margin:'10px',
    color:'white',
    paddingBottom:'50px',
  },
  
}));

export default function Footer(){
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.box}>
        <Grid item xs={2} style={{backgroundColor:'black',}}></Grid>

        <Grid container item xs={8} align='center'>
        <Grid item xs={12} className={classes.text}>Contact me</Grid>
         <Grid item xs={12}>
              <a href="https://twitter.com/78_utkarsh" target="_blank" ><AiFillTwitterCircle className={classes.icons} /></a>
              <a href="https://www.instagram.com/utkarsh29_" target="_blank" ><AiFillInstagram className={classes.icons} /></a>
              <a href="mailto:utkarshpateriya.78@gmail.com" target="_blank" ><MdEmail className={classes.icons} /></a>
              <a href="https://github.com/utkarshpateriya" target="_blank" ><AiFillGithub className={classes.icons} /></a>
              <a href="https://in.linkedin.com/in/utkarsh-pateriya-b4103a14b?trk=people-guest_people_search-card" target="_blank" ><AiFillLinkedin className={classes.icons} /></a>
        </Grid>
        <Grid item xs={12}>
        <Typography variant='body2' className={classes.text}>
        Made by Utkarsh ©2020
        </Typography>
        </Grid>
        </Grid>

        <Grid item xs={2} style={{backgroundColor:'black',}}></Grid>
      </Grid>
    </>
  )
}

   