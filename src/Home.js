import React from "react";
import { Grid } from "@mui/material";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>({
  main:{
    backgroundColor:"black",
    [theme.breakpoints.down('md')]: {
      backgroundColor: "purple",
    },
  },
}))
function Home() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item lg={2}  className={classes.main}>
        <SideBar />
      </Grid>
      <Grid item lg={10}>
        <NavBar />
      </Grid>
    </Grid>
  );
}

export default Home;
