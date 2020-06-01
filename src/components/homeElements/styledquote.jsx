import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { makeStyles, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    leftquote:{
        fontSize:'20px',
        transform:'translate(-20px, -20px )',
        color:'#A23F54'
    },
    rightquote:{
        fontSize:'20px',
        transform:'translate(20px, 20px )',
        color:'#A23F54',
    },
    quote:{
        fontStyle:'italic',
        fontFamily:'Ubuntu'
    }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
<>
        <Grid container align='center' style={{padding:'10px', margin:'150px 0px 150px 0px'}}>
            <Grid item xs={12}>
                    <Typography variant="h4" className={classes.quote}>
                <FaQuoteLeft className={classes.leftquote} />
                    All progress takes place outside the comfort zone.
                    <FaQuoteRight className={classes.rightquote} />
                    </Typography>
            </Grid>
        </Grid>
        </>
    )
}
