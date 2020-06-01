import React from 'react';
import {makeStyles, Grid, Paper} from '@material-ui/core';
import utkarshBack from '../../components/furniture/back1.png';
import utkarshBackxs from '../../components/furniture/back2.png';
import utkarshBacksm from '../../components/furniture/back3.png';

const useStyles = makeStyles((theme) => ({
back:{
  width:'100vw',
  padding:'0',
  backgroundImage:`url(${utkarshBack})`,
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  position:'absolute',
  height:'100vh',
  opacity:'1',
  transform:'translate(0px, -10px)',
  right:'0',
  [theme.breakpoints.down('md')]: {
    backgroundSize:'cover',
    backgroundImage:`url(${utkarshBacksm})`,
  },
  [theme.breakpoints.down('xs')]: {
    backgroundSize:'cover',
    backgroundImage:`url(${utkarshBackxs})`,
  },
  
  
},
blank:{
  opacity:'0.2',
  borderRadius:'0',
  width:'100vw',
  backgroundImage:'linear-gradient(to right, black ,black, purple)',
  transform:'translate(0px, -10px)',
  height:'100vh',
  zIndex:'100',
  [theme.breakpoints.down('sm')]: {
    backgroundSize:'contain',
    backgroundImage:'linear-gradient(to right, black ,black, purple)',
    opacity:'0.2',
  },
},
}));

export default function BackgroundImg(){
const classes = useStyles();
return (
<>
<Paper
src={utkarshBack} 
alt="BackGround" 
className={classes.back} />
<Grid container>
      <Grid tem xs={12}>
        <Paper className={classes.blank}></Paper>
      </Grid>
  </Grid>
</>
)
}