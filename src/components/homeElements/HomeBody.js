import React from 'react';
import { makeStyles, Divider, Grid, Paper } from '@material-ui/core';
import Welcome from './Welcome';
import TechIknow from './Technologies';
import Footer from './footer';
import Card from "./card";
import StyleQuotes from "./styledquote";
import Typer from './Typer';
import LastContent from './lastContent';
import Pallete from './pallete';
import Test from './test';

const useStyles = makeStyles((theme) => ({
blank:{
  opacity:'0.2',
  borderRadius:'0',
  width:'100vw',
  backgroundImage:'linear-gradient(to right, black ,black, purple)',
  transform:'translate(0px, -10px)',
  height:'100vh'
},
divider:{
  margin:'150px 0px 150px 0px'
},

}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
<>
<Grid>
{/* A blank overlay on background Image */}

{/* Automatic typer */}
<Typer />
{/* Services*/}
<Card />
{/* Here's my story */}
<Welcome />
{/* Quote */}
<StyleQuotes />
<Divider className={classes.divider} /> 
{/* Things I know */}
<TechIknow />
{/* End Grids */}
<LastContent 
title='My Mindset' 
content='I’m never satisfied to just come up with ideas. Instead, I have an almost impulsive need to act on them.

My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study, and artistic endeavors. I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease. 

I like to develop expertise in several areas throughout my life and career.

I’m a people-person with deep emotions and empathy, a natural storyteller.'  
/>
<Pallete /> 
<LastContent
 title='Thanks for Visiting'
 content="I’m able to inspire and am at my best when I’m sharing my creative expressions with others. 
I’m always open to discussing product design work or partnership opportunities.
If you like my work and have some cool projects to work on, just send me a direct message or contact 
me through social sites listed below."
  />

<Footer />
</Grid>
</>
  );
}