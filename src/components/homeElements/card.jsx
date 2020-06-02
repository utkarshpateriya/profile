import React from 'react';
import { Grid, Paper, Typography, Divider, makeStyles}from "@material-ui/core";
import { FaLaptopCode, FaDesktop } from "react-icons/fa";
import { MdPhonelinkSetup } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
    box:{
        margin:'50px 0px 50px 0px',
    },
    icons:{
        fontSize:'40px',
        width:'100%',
        margin:'50px 0px 10px 0px',
    },
    paperBox:{
        margin:'40px',
        [theme.breakpoints.down('xs')]: {
            height: 'auto',
          },
          [theme.breakpoints.up('md')]: {
            height:'650px'
          },
          [theme.breakpoints.up('sm')]: {
            height:'auto'
          },
          [theme.breakpoints.up('lg')]: {
            height:'550px'
          },
    },
    content:{
        padding:'40px'
    },
    span:{
        color:"red"
    },
    title:{
        margin:"150px 0px 150px 0px",
        fontFamily:"Ubuntu",
        fontSize:"66px",
        width:'100%',
        [theme.breakpoints.down('sm')]: {
            fontSize:"36px",
          },
        [theme.breakpoints.down('xs')]: {
            fontSize:"24px",
          },
          
          
    }
}));

export default function (props){
    const classes = useStyles();
    return (
        <>
        <Typography align="center" className={classes.title}>Congruency Builds Credibility</Typography>
        <Grid container className={classes.box} alignContent='center' >
        <Grid item md={4} sm={6} xs={12}>
        <Paper elevation={2} className={classes.paperBox}>
                    <FaLaptopCode className={classes.icons} />
            <Typography style={{marginBottom:'30px'}} variant='h4' align='center'>
            Web <span className={classes.span}>Development</span>
            </Typography>
                <Divider />
            <Typography className={classes.content} variant='h6' align='left'>
                    A successful website does three things:
                    It attracts the right kinds of visitors.
                    Guides them to the main services or product you offer.
                    Collect Contact details for future ongoing relation.
            </Typography>
        </Paper>
        </Grid>

        <Grid itm md={4} sm={6} xs={12}>
        <Paper elevation={2} className={classes.paperBox}>
                    <FaDesktop className={classes.icons} />
            <Typography style={{marginBottom:'30px'}} variant='h4' align='center'>
            Desktop App <span className={classes.span}>Development</span>
            </Typography>
                <Divider />
            <Typography className={classes.content} variant='h6' align='left'>
            Every program attempts to expand until it can read mail.
            Those programs which cannot so expand are replaced by ones which can.
            </Typography>
        </Paper>
        </Grid>

        <Grid itm md={4} sm={6} xs={12}>
        <Paper elevation={2} className={classes.paperBox}>
                    <MdPhonelinkSetup className={classes.icons} />
            <Typography style={{marginBottom:'30px'}} variant='h4' align='center'>
            App <span className={classes.span}>Development</span>
            </Typography>
                <Divider />
            <Typography className={classes.content} variant='h6' align='left'>
            The rich and interactive experiences we have come to expect on 
            mobile apps have created new standards and expectations for 
            all digital media including the web. The result is websites are 
            evolving to become more app-like in their rich functionality.
            </Typography>
        </Paper>
        </Grid>
        </Grid>
        </>
    )
}
