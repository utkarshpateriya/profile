import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';



const useStyles = makeStyles({
  root: {
    maxWidth: 455,
  },
  media: {
    height: 520,
    margin:'50px',
    // backgroundImage: `url(${Image})`,
    backgroundRepeat: "no repeat",
    backgroundSize: "contain",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.media}></Paper>
  );
}