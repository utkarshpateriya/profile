import React from 'react';
import { makeStyles, Divider, Grid, Paper } from '@material-ui/core';
import Welcome from './Welcome';
import TechIknow from './Technologies';
import Footer from './footer';
import Card from "./card";
import StyleQuotes from "./styledquote";
import Typer from './Typer';

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
{/* A blank overlay on background Image */}

{/* Automatic typer */}
<Typer />
{/* Services*/}
<Card />
{/* Here's my story */}
{/* <Welcome /> */}
{/* Quote */}
<StyleQuotes />
<Divider className={classes.divider} /> 
{/* Things I know */}
<TechIknow />
{/* End Grids */}
<Footer />
</>
  );
}