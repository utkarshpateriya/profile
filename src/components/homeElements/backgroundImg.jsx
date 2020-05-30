import React from 'react';
import {Paper, Typography, makeStyles, Container, formatMs} from '@material-ui/core';
import Typed from 'react-typed';
import { primaryColor } from './../colorPallets';
// import Image from '../../somi.jpg';


const useStyles = makeStyles((theme) => ({
imagestyle:{
  fontFamily: 'Ubuntu',
  borderRadius: '0',
  textAlign: 'center',
  color: 'black',
  height:'100vh',
  backgroundColor:'#212b29',
//   backgroundImage: 'linear-gradient(to right, #756E52, #eae3c5)',
  position:'absolute',
  width:'100%',
  zIndex: '-1',
  top:'0',
  // backgroundImage: 'linear-gradient(to right, #fd746c, #ff9068)',
  // backgroundImage: `url(${Image})`,
  // backgroundColor:'black',
},
typer: {
    color: `${primaryColor}`,
    position:'absolute',
    transform:'translate(-50%, -50%)',
    left:'50%',
    top:'50%'
},
font: {
    fontFamily: 'Ubuntu',
    fontSize:'2em',
},
subfont:{
    fontFamily: 'Ubuntu',
    fontSize:'1em',
}
}));

export default function BackgroundImg(){
    const classes = useStyles();
     return (
       <>
     <Paper className={classes.imagestyle} elevation={0}>
     <Container className={classes.typer}>
        <Typography className={classes.font}>
                <Typed strings={["Utkarsh Mishra"]} 
                    typeSpeed={40}/>
                </Typography>
        <Typography className={classes.subfont}>
                <Typed strings={["I am the creater of this website!", "I watch Anime", "Don't mess with me"]} 
                typeSpeed={40} backSpeed={60} loop/>
        </Typography>
    </Container>
</Paper>
</>
)
}