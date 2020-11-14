import React, { Fragment, useEffect } from 'react';
import Header from "../components/layout/Header";
import MediaList from "../components/media/MediaList";

//  Material Components
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

//  Redux
import { useDispatch, useSelector } from "react-redux";
import { getFilesAction } from "../redux/actions/mediaActions";

export default function Main() {
  const dispatch = useDispatch();
  const { files, user, downloading } = useSelector(state => state.media);

  // useEffect(() => {
  //   dispatch(getFilesAction());
  // }, []);
  
  return (
    <Fragment>
      <Header />
      <Backdrop className="backdrop" open={downloading}>
        <CircularProgress color="inherit"  />
      </Backdrop>
        {/* <Container className="no-margin-no-padding" fixed style={{backgroundColor: "green"}}> */}
        <Grid direction="column" className="main-content">
          <MediaList 
            title="Favourites"
            files={files.filter( file => user.favs.includes(file.id))}
          />
          <MediaList 
            title="Recently"
            files={files.filter( file => user.lastShowed.includes(file.id))}
          />
          {/* <MediaList 
            title="All"
            files={files}
          /> */}
        {/* </Container> */}
        </Grid>
    </Fragment>
  )
}
