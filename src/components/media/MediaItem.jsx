import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

//  Material components
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

//  Redux
import { useDispatch, useSelector } from "react-redux";
import { markItemFavAction } from "../../redux/actions/mediaActions";

export default function MediaItem({file}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const {favs} = useSelector(state => state.media.user);

  file.fav = favs.includes(file.id);

  useEffect(() => {
    file.fav = favs.includes(file.id)
    // eslint-disable-next-line
  }, [favs]);

  const onFavClick = e => {
    //  Prevent click on lower item
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    //  We send the opposite of actual
    dispatch(markItemFavAction(file.id, !file.fav));
  }

  //  Call when we click on a item to watch it
  const goPlay = () => {
    history.push(`/player/${file.id}`); 
  }

  return (
    <Card className="file-card">
      <CardActionArea onClick={goPlay}>
        <CardMedia
          // className="file-card-image"
          component="img"
          alt={file.title}
          image={file.cover}
          title={file.title}
        />
        <CardContent>
          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Typography gutterBottom variant="h5" component="h2">
                {file.title}
              </Typography>
            </Grid>
            <Grid item>
              {file.fav
              ? <StarIcon style={{ color: "#f9f10a"}} fontSize="large" onClick={onFavClick} />
              : <StarBorderIcon fontSize="large" onClick={onFavClick} />
              }
            </Grid>
          </Grid>
          <Grid container direction="row" justify="space-between">
            <Grid item>
              <Typography gutterBottom ariant="caption" color="textSecondary">
                {new Date(file.duration * 1000).toISOString().substr(11, 5)}
              </Typography>
            </Grid>
            <Grid item>
              <Chip variant="outlined" size="small" label={file.section} />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

MediaItem.prototypes = {
  file: PropTypes.object.isRequired
}