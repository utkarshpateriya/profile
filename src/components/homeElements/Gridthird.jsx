import React from 'react';
import { makeStyles, Divider, Typography, Grid, Paper } from '@material-ui/core';

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
      mediatwo: {
        height: 520,
        margin:'50px',
        // backgroundImage: `url(${ImageTwo})`,
        backgroundRepeat: "no repeat",
        backgroundSize: "contain",
      },
    }));



export default function Gridthird() {
    const classes = useStyles();
    return (
  <>
<Grid container spacing={2} className={classes.end} style={{marginTop:'250px'}}>

        <Grid item xs={6}>
        <Paper className={classes.paper} elevation={0} justifyContent='center'>
            <Typography variant='h4' align='left' className={classes.title}>
              My Story
            </Typography>
            <Typography variant='body1' paragraph='true' align='left' className={classes.content}>

            The connections I draw between human nature and political systems in my new book, for example, were prefigured in the debates during the Enlightenment and during the framing of the Amerian Constitution.
            Look at almost any passage, and you'll find that a paragraph has five or six metaphors in it. It's not that the speaker is trying to be poetic, it's just that that's the way language works.
            Let us learn to appreciate there will be times when the trees will be bare, and look forward to the time when we may pick the fruit.
            And this, our life, exempt from public haunt, finds tongues in trees, books in the running brooks, sermons in stones, and good in everything.
            

            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.mediatwo}></Paper>
        </Grid>
        <Grid item xs={2}></Grid>

  </Grid>
  </>
  );
}