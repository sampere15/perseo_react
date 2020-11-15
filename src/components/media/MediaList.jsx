import React from 'react';
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import MediaItem from "./MediaItem";

export default function MediaList(props) {
  const {title, files} = props;

  if(files.length > 0) {
    return(
      <Grid container className="list-content" xs={11}>
        <Grid xs={12}>
          <Typography variant="h4">{title}</Typography>
        </Grid>
        <Grid container justify="flex-start" spacing={1}>
          {files.map( file => 
            <Grid item key={file.id} xs={6} sm={4} md={2}>
              <MediaItem file={file} />
            </Grid>
          )}
        </Grid>
      </Grid>
    );
  } else {
    return null;
  }
}

MediaList.propTypes = {
  title: PropTypes.string.isRequired,
  files: PropTypes.array.isRequired
}