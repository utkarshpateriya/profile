import React from 'react';
import {Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    contentstyle: {
      fontFamily: 'Ubuntu',
      padding: theme.spacing(9),
      borderRadius: '0',
      textAlign: 'center',
      color: 'white',
      marginTop: '0px',
      backgroundImage: 'linear-gradient(to right, #000000, #000000)',
      zIndex: '1',
    },
  }));

  export default function Bar(){
      const classes = useStyles();
      return(
        <Paper className={classes.contentstyle}>HOME</Paper>
      )
  }