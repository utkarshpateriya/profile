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
  title='I’d love to hear from you'
  content=' If you like my work and have some cool projects to work on, just send me a direct message or contact me through social sites listed below.
'
/>
<Footer />
</>
  );
}