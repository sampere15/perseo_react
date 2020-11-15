import React from 'react'

import Header from "../components/layout/Header";

import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 300,
    width: 200,
  },
}));

export default function Layout() {
  const classes = useStyles();
  const mockData = [0, 1, 2, 3, 4, 5];
  // const mockData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <React.Fragment>
      <Header />
      <Grid container direction="column"
        style={{backgroundColor: "yellow"}}
      >
        <Grid item
          style={{backgroundColor: "green", margin: "2rem"}}
        >
          <Typography variant="h4">Title</Typography>
          <Grid container justify="flex-start" spacing={1}>
            {mockData.map((value) => (
              <Grid key={value} item>
                <Paper className={classes.paper} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
