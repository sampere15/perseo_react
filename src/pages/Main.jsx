import React, { Fragment, useEffect } from 'react';
import Header from "../components/layout/header/Header";
import MediaList from "../components/media/MediaList";

//  Material Components
import Grid from "@material-ui/core/Grid";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

//  Redux
import { useDispatch, useSelector } from "react-redux";
import { getFilesAction } from "../redux/actions/mediaActions";

export default function Main() {
  const dispatch = useDispatch();
  const { files, user, downloading, filter, filesFiltered } = useSelector(state => state.media);

  //  Get user files
  useEffect(() => {
    //  We download files just the first time
    if(files.length === 0) {
      dispatch(getFilesAction());
    }
    // eslint-disable-next-line
  }, []);

  return(
    <Fragment>
      <Backdrop className="backdrop" open={downloading}>
        <CircularProgress color="inherit"  />
      </Backdrop>
      <Header showSearch />
      <Grid container direction="column">
        {filter === null
        ?
          <>
            <MediaList 
              title="Favourites"
              files={files.filter( file => user.favs.includes(file.id))}
            />
            <MediaList 
              title="Recently"
              files={files.filter( file => user.lastShowed.includes(file.id))}
            />
            {/* <MediaList
              title="Content"
              files={files}
            /> */}
          </>
        :
          <MediaList 
            title="Results"
            files={filesFiltered}
          />
        }
      </Grid>
    </Fragment>
  );
}
