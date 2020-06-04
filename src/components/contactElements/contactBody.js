import React from 'react';
import { makeStyles} from '@material-ui/core';
import Background from './../homeElements/backgroundImg'
import Footer from './../homeElements/footer';
import Para from './../aboutElements/aboutPara';
import Body from './contact'

const useStyles = makeStyles((theme) => ({
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
<>
<Background />
<Body />
<Para 
  title='Something'
  content='Some paragraph on the content'
/>
<Footer />
</>
  );
}