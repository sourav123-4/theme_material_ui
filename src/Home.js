import React from "react";
import { Grid } from "@mui/material";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>({
  mainContainer:{
    height:"200px",
    backgroundColor:"green",
    textAlign:"center",
  },
  main1:{
    backgroundColor:"black",
    [theme.breakpoints.down('md')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.main,
    },
  },
  main2:{
    backgroundColor:"black",
    [theme.breakpoints.down('md')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
  },
}))
function Home() {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <Grid item lg={2}  className={classes.main1}>
        <SideBar />
      </Grid>
      <Grid item lg={10} className={classes.main2}>
        <NavBar />
      </Grid>
    </Grid>
  );
}

export default Home;
