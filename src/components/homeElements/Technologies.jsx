import React from 'react';
import { makeStyles, Typography, Grid, Paper} from '@material-ui/core';
import html5 from './../furniture/html5.svg';
import jsx from './../furniture/react.png';
import css from './../furniture/css3.png';
import bootstrap from './../furniture/bootstrap.png';
import materialize from './../furniture/materialize.png';
import scss from './../furniture/sass.png';
import javaScript from './../furniture/javascript.png';
import nodejs from './../furniture/nodejs.png';
import angular from './../furniture/angular.png';
import jquery from './../furniture/jquery.png';
import mongoDB from './../furniture/mongodb.png';
import Tumblr from './../furniture/tumblr.png';
import Wordpress from './../furniture/wordpress.png';
import Github from './../furniture/github.png';
import Photoshop from './../furniture/photoshop.png';
import flutter from './../furniture/flutter.png';
import dart from './../furniture/dart.png';
import cpp from './../furniture/cpp.png';
import py from './../furniture/py.png';
import blender from './../furniture/blender.png';
import sql from './../furniture/php.png';
import php from './../furniture/php.svg';

const useStyles = makeStyles((theme) => ({
  title:{
    marginTop:'50px',
    margin:'auto'
  },
  techTitle:{
    margin:'0px',
  },

  icon:{
    // backgroundImage: `url(${html5})`,
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
    height:'100px',
    width:'100px',
    position: 'relative',
    margin:'auto'
  },

  alignment:{
    display:'flex',
    justifyContent:'center',
  }
    }));

const Banners = {
BannerItem : [
  {
    bannerName:'HTML',
    name: ['HTML', 'JSX'],
    img:[`${html5}`, `${jsx}`]
  },
{
  bannerName:'Styling',
  name: ['CSS', 'BootStrap', 'Materialize', 'SCSS'],
  img:[`${css}`, `${bootstrap}`, `${materialize}`, `${scss}`]
},
{
  bannerName:'JavaScript',
  name: ['React', 'Node', 'Angular', 'jQuery'],
  img:[`${jsx}`, `${nodejs}`, `${angular}`, `${jquery}`]
},
{
  bannerName:'Back-End',
  name: ['PostgreSQL', 'MongoDB', 'PHP' ],
  img:[`${sql}`, `${mongoDB}`,`${php}` ]
},
{
  bannerName:'CMS',
  name: ['Tumblr', 'Wordpress' ],
  img:[`${Tumblr}`, `${Wordpress}`]
},
{
  bannerName:'Android - iOS',
  name: ['Flutter', 'Dart' ],
  img:[`${flutter}`, `${dart}`]
},
{
  bannerName:'Other',
  name: ['Github', 'Photoshop', 'Blender' ],
  img:[`${Github}`, `${Photoshop}`, `${blender}`]
},
{
  bannerName:'Programming Languages',
  name: ['C++', 'Python' ],
  img:[`${cpp}`, `${py}`]
},
],
}

function Banner(props){
  const classes = useStyles();
  
  return <Grid container   className={classes.techTitle}>
  <Grid item xs={12} >
    <Paper elevation={2} style={{padding:'20px 20px 20px 20px', borderRadius:'0px', margin:'40px 0px 40px 0px'}}>
        <Grid item xs ={12}>
          <Typography variant='h5' align='center' style={{margin:'35px', boxShadow:'0px 1px #888888', paddingBottom:'20px'}}>{props.bannerName}</Typography>
        </Grid> 
        {/* Icons */}
        <Grid container spacing={0}>
        {/* Icon Items Open*/}
{/* Icon Text */}
 {props.name.map((data, index) => {
	 return <Grid key={props.index} item md={3} sm={4} xs={6} style={{overflow:'hidden'}}>
  <div className={classes.alignment}>
    <Grid item xs={8}>
        <Paper 
        elevation={0} 
        className={classes.icon} 
        style={{backgroundImage: `url(${props.img[index]})`}}
        >
        </Paper>
        </Grid>
</div><Typography  variant='h6' align='center' style={{margin:'10px'}}> {data} </Typography></Grid>
 })}
            {/* Icon Items  Close*/}
        </Grid>
    </Paper>
  </Grid>
</Grid>
}

export default function Gridsec() {
        const classes = useStyles();
        return (
      <>
      <Grid container spacing={0} style={{marginBottom:'200px', backgroundColor:'#DDE2E3'}}>
      <Grid item md ={2} sm={0} xs={0}></Grid>
      <Grid  item md ={8} xs={12} style={{backgroundColor:'#DDE2E3'}}>
          <Grid container>
              <Paper elevation={0} className={classes.title}>
                  <Typography variant='h3' style={{backgroundColor: '#DDE2E3'}}>Skills</Typography>
              </Paper>
            </Grid>

          {/* Tech Banner */}
          {Banners.BannerItem.map((props, index) => {
		        return <Banner bannerName={props.bannerName}  name={props.name} img={props.img}/>
	    	  })
	    	  }
         {/* Tech Banner */}
        </Grid>

          <Grid item md ={2} xs={0}></Grid>
      </Grid>
      </>
    )
}