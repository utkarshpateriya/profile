import React from 'react';
import { makeStyles, Divider, Grid, Paper } from '@material-ui/core';
import Gridfirst from './hello';
import TechIknow from './Technologies';
import Gridthird from './Gridthird';
import Gridfourth from './Gridfourth';
import Quote from './quote';
import Footer from './footer';

const useStyles = makeStyles((theme) => ({
blank:{
  opacity:'0',
  borderRadius:'0',
  height:'100vh',
  top:'0',
},
divider:{
  margin:'150px 0px 150px 0px'
},
body:{
  backgroundColor:'#A5B1B6',
}
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
<>
  <Grid container>
      <Grid tem xs={12}>
        <Paper className={classes.blank}>w</Paper>
      </Grid>
  </Grid>
{/* Who am I */}
 <Gridfirst />

<Divider className={classes.divider} />

{/* Things I know */}
<TechIknow />
{/* End Grids */}
 {/* <Gridthird /> */}
  {/* <Gridfourth /> */}

<Divider className={classes.divider} />

{/* Quote */}
<Quote />

<Divider className={classes.divider} />  

<Footer />
</>
  );
}