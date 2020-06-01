import React from 'react';
import { makeStyles, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
contentstyle: {
    fontFamily: 'Ubuntu',
    padding: theme.spacing(9),
    borderRadius: '0',
    textAlign: 'center',
    color: 'white',
    marginTop: '0px',
    backgroundColor:'#212b29',
    // backgroundImage: 'linear-gradient(to right, #756E52, #eae3c5)',
    zIndex: '1',
    width:'100%',
  },
copyright:{
    fontSize:'10px',
    margin:'30px',
  }
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    return (
  <>
<Paper className={classes.contentstyle}>
    <Typography variant='body2'>Made with fingers of a person called => Utkarsh</Typography>
    <Typography className={classes.copyright}>©2020 Mc.Oba</Typography>
  </Paper>
  </>
  );
}