import React from "react";
import {Switch,Route} from "react-router-dom";
import routes from "./routes";
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup, Paper} from '@material-ui/core';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
      color:'white',
      listStyleType: "none",
      boxShadow: '0.1px 0 0 0  rgba(0, 0, 0, 0)',
      borderRadius: "0px",
      height: "45px",
      padding: '0px 20px 0px 20px',
      zIndex: '100',
      fontSize:'16px',
    },
    groups:{
      opacity:'0.8',
      zIndex: '100',
      position:'absolute',
      width:'100%',
      display:'flex',
      justifyContent:'center'
    },

    navpaper:{
      backgroundColor:'rgba(0,0,0,0)',
      zIndex: '100',
      border:'solid rgba(0,0,0,0)',
    }
  });

function createNavlink(routes, index, classes){
    return (       
    <div>
    <Link  to={"profile/"+routes[index].path} style={{textDecoration:'none'}}>
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
    <Paper elevation={0} className={classes.navpaper}>
    <ButtonGroup className={classes.groups} variant="text" color="primary" aria-label="text primary button group">
   {routes.map( () =>  {return (
    <div key={index}>
     {createNavlink(routes, index++, classes)}
     </div>)
     })}
     </ButtonGroup>
     </Paper>

            <Switch>
            {routes.map((route, index) => (<Route exact={route.exact} key={index}  path={"/"+route.path} children={route.body}/>))}
          </Switch>
          
        </>
    )
}