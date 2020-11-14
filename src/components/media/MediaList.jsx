import React from 'react';
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import MediaItem from "./MediaItem";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function MediaList(props) {
  const {title, files} = props;
  const classes = useStyles();

//   //  Check if we have files to render
//   return (
//     <Grid container style={{backgroundColor: "red"}} >
//       <Typography variant="h5">{title}</Typography>
//       {files && files.length > 0 ? 
//       (
//         <Grid item xs={12}>
//           {files.map( file => <p>{file.title}</p> )}
//         </Grid>
//       ) 
//         : <Typography>No hay elementos todavía</Typography>
//       }
//       <Grid>
//       </Grid>
//     </Grid >
//   )
// }
  return(
    <Container>
      <h1>{title}</h1>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="flex-start" spacing={1}>
            {files.map( file => (
              <Grid key={file.id} item>
                <MediaItem file={file} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

MediaList.propTypes = {
  title: PropTypes.string.isRequired,
  files: PropTypes.array.isRequired
}