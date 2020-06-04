import React from 'react';
import { makeStyles} from '@material-ui/core';
import Background from './../homeElements/backgroundImg'
import Footer from './../homeElements/footer';

const useStyles = makeStyles((theme) => ({
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
<>
<Background />
<Footer />
</>
  );
}