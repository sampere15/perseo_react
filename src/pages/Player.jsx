import React, { useState, useEffect, Fragment } from 'react';
import ReactPlayer from 'react-player';
import Header from "../components/layout/Header";
import { useHistory } from "react-router-dom";

import axiosClient from "../utils/axios";

//  Material components
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Backdrop from "@material-ui/core/Backdrop";
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";
import Rating from '@material-ui/lab/Rating';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

export default function Player(props) {
  const [showLoading, setShowLoading] = useState(false);
  const [file, setFile] = useState(null);
  const fileId = props.match.params.id;
  const history = useHistory();

  useEffect(() => {
    downloadFileInfo();
  }, []);

  //  Function to download file information
  const downloadFileInfo = async () => {
    try {
      //  Show a loading spinner while waiting for de file information
      setShowLoading(true);
      //  Prepargin bodyForm
      let formData = new FormData();
      formData.append("token", localStorage.getItem("token"));
      formData.append("device", "Web");
      formData.append("id", fileId);

      let res = await axiosClient.post("/Play.php", formData);
      //  Save file information
      setFile(res.data);
      //  Hide loading
      setShowLoading(false);
    } catch (err) {
      console.log(err);
    } 
  }

  return (
    <div>
      <Header />
      <Backdrop className="backdrop" open={showLoading}>
        <CircularProgress color="inherit"  />
      </Backdrop>
      {file &&
        <Fragment>
          <Tooltip title="Back" onClick={() => history.goBack()}>
            <IconButton aria-label="delete">
              <ArrowBackIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <div className="player-container">
            <ReactPlayer 
              url={file.url} 
              // playing={true} 
              controls={true} 
              width="100%"
              height="600px"
            />
          </div>
          <Container maxWidth="lg">
            <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
              <Grid item>
                <Typography variant="h5">{file.title}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  {new Date(file.duration * 1000).toISOString().substr(11, 5)}
                  <Typography variant="caption">min</Typography>
                </Typography>
              </Grid>
              <Grid item>
                <Chip size="small" label={file.rating} />
              </Grid>
            </Grid>
            {/* Sometimes the info received */}
            {file.totalVotes > 0 ?
              <Grid container direction="row" justify="flex-start" alignItems="center">
                <Rating name="half-rating-read" value={ file.votes / file.totalVotes } readOnly />
                <Typography component="legend">({file.totalVotes} votes)</Typography>
              </Grid>
            :
              <Typography variant="body1">No votes yet</Typography>
            }
            <Typography variant="body1" component="p">
            {/* <p> */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et dictum turpis. Aliquam eget tempus odio. Sed tellus leo, molestie sit amet augue ut, sagittis bibendum quam. Ut nec arcu nisl. Aenean lorem mi, egestas at maximus et, elementum et ipsum. Sed facilisis mauris lacus, sit amet scelerisque ipsum feugiat non. Maecenas lobortis vel elit a egestas. Duis nisl orci, sagittis et ex ac, vehicula egestas enim. Vestibulum vel ultrices neque.

              Nullam euismod metus id dapibus vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sodales egestas varius. Maecenas laoreet mattis lectus, vel pharetra purus malesuada vel. Nulla quis tortor sed quam viverra sodales et sed erat. Maecenas sem libero, tincidunt vitae felis in, gravida interdum lacus. In vitae diam at nunc consequat aliquam eget ut felis. Proin pharetra ullamcorper venenatis. Cras tortor magna, luctus ut gravida vel, ornare quis nisi.
            {/* </p> */}
            </Typography>
          </Container>
        </Fragment>
      }
    </div>
  )
}
