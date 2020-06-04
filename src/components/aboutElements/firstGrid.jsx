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
        fontSize:'26px',
        lineheight:'40px',
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
                I believe in being consistent. "Slow progress is better than no progress."
But, in times when coding is not enough, I participate in other activities.
I work on my communication skills by talking to myself, writing blogs, and
one of them is making a lifestyle and travel vlogs. 
I find rythm in coding being a music enthusiast. To entertain me I sing 
along while playing my guitar. Also, there is one self-made song by me ft. Zack Music
 "Tere Aane Se by Utkarsh."
                </Typography>
                <Typography align='left' style={{marginTop:'20px'}} className={classes.content}>
              
                </Typography>
            </Grid>  
            <Grid item xs={1} md={1} />  
        </Grid>
        </>
    )
}
