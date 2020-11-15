import React from 'react';
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import MediaItem from "./MediaItem";

export default function MediaList(props) {
  const {title, files} = props;

  return(
    <Grid item class="list-content">
      <Typography variant="h4">{title}</Typography>
        <Grid container justify="flex-start" spacing={1}>
        {files.map( file => 
          <Grid item key={file.id}>
            <MediaItem file={file} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

MediaList.propTypes = {
  title: PropTypes.string.isRequired,
  files: PropTypes.array.isRequired
}