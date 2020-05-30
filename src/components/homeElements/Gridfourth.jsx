import React from 'react';
import { makeStyles, Typography, Grid, Paper } from '@material-ui/core';
import SimpleCard from './examplecard';

const useStyles = makeStyles((theme) => ({
    content:{
        padding:'15px 100px 100px 120px',
        lineHeight:'30px',
        fontSize:'18px'
      },
      title:{
        fontSize:'30px',
        padding:'20px 0px 0px 120px',
      },
      paper:{
        margin:'50px',
        backgroundColor:'rgba(242, 242, 242,0)',
      },
}));

export default function Gridfourth() {
    const classes = useStyles();
    return (
  <>
<Grid container spacing={2} >
        
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
              <SimpleCard />
        </Grid>
        <Grid item xs={6}>
        <Paper className={classes.paper} elevation={0} justifyContent='center'>
            <Typography variant='h4' align='left' className={classes.title}>
              Travell with me
            </Typography>
            <Typography variant='body1' paragraph='true' align='left' className={classes.content}>

            And this, our life, exempt from public haunt, finds tongues in trees, books in the running brooks, sermons in stones, and good in everything.
            Look at almost any passage, and you'll find that a paragraph has five or six metaphors in it. It's not that the speaker is trying to be poetic, it's just that that's the way language works.
            The connections I draw between human nature and political systems in my new book, for example, were prefigured in the debates during the Enlightenment and during the framing of the Amerian Constitution.
            Let us learn to appreciate there will be times when the trees will be bare, and look forward to the time when we may pick the fruit.

            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={1}></Grid>

  </Grid>
  </>
  );
}