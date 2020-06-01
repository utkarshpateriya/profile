import React from "react";
import {Switch,Route, Link} from "react-router-dom";
import routes from "./routes";
import { makeStyles } from '@material-ui/core';
import { Button, ButtonGroup, Paper, Grid} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      color:'white',
      listStyleType: "none",
      borderRadius: "0px",
      height: "45px",
      zIndex: '100',
      fontSize:'22px',
      fontStyle:'bold',
      padding: '0px 60px 0px 60px',
      [theme.breakpoints.down('md')]: {
        padding:'0px 15px 0px 0px',
        fontSize:'12px',
      },
      
    },
    groups:{
      zIndex: '100',
      position : 'absolute',
      width:'100%',
      display:'flex',
      justifyContent:'center',
      margin:'0px',
      borderRadius:'0px',
      backgroundColor:'rgba(0,0,0,0.6)',
    },

  }));

function createNavlink(routes, index, classes){
    return (       
    <div>
    <Link  to={routes[index].path} style={{textDecoration:'none'}}>
    <Button className={classes.root}  style={{listStyleType:'none'}} disableRipple>
       <li>{routes[index].name } </li>
       </Button>
    </Link>
    </div>
    )
}


export default function Navbar(){
  const classes = useStyles();
  var index = 0;
    return(
    <> 
    <Grid container>
    <Paper elevation={5} className={classes.navpaper}>
    <ButtonGroup className={classes.groups} variant="text" color="primary" aria-label="text primary button group">
   {routes.map( () =>  {return (
    <div key={index}>
     {createNavlink(routes, index++, classes)}
     </div>)
     })}
     </ButtonGroup>
     </Paper>

            <Switch>
            {routes.map((route, index) => (<Route exact={route.exact} key={index}  path={route.path} children={route.body} />))}
          </Switch>
          </Grid>
        </>
    )
}