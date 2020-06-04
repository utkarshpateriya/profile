import React from 'react';
import { makeStyles, Divider, Grid, Paper } from '@material-ui/core';
import Background from './../homeElements/backgroundImg'
import Footer from './../homeElements/footer';
import AboutIntro from './aboutIntro';
import SecondGrid from './secondGrid';
import FirstGrid from './firstGrid';
import Para from './aboutPara';

const useStyles = makeStyles((theme) => ({
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
<>
<Background />
<AboutIntro />
<Para 
title='Hello'
content='I am paragraph'  
/>
<FirstGrid />
<SecondGrid />

<Para 
title='Hello'
content='I am paragraph'  
/>
<Footer />
</>
  );
}