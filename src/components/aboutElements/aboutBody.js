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
title='What I do besides coding?'
content='The past few years, I’ve gotten into blogging. 
I love the challenge of finding answers to the problems in which
others are stuck into. I like using my problem-solving skills to find the ones 
that are really well-hidden. Learning how people hide things – and 
where people are likely to look – has helped me tremendously in my
 work. It’s all about learning to see things through someone else’s eyes.'  
/>
<FirstGrid />
<SecondGrid />
<Footer />
</>
  );
}