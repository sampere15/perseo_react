import React from 'react';
import {useHistory, Redirect} from "react-router-dom";

//  Material components
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import StarIcon from '@material-ui/icons/Star';

//  Redux
// import { useDispatch } from "react-redux";
// import { selectItemAction } from "../../redux/actions/mediaActions";

const useStyles = makeStyles({
  root: {
    maxWidth: 230,
  },
  media: {
    height: 400,
  },
});

export default function MediaItem({file}) {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const history = useHistory();

  const onFavClick = e => {
    //  Prevent click on lower item
    if (e.stopPropagation) {
      e.stopPropagation();
    }
  }

  //  Call when we click on a item to watch it
  const goPlay = () => {
    //  Store the file clicked
    // dispatch(selectItemAction(file));
    //  Redirect to player page
    history.push(`/player/${file.id}`); 
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={goPlay}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={file.cover}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box display="flex" flexDirection="row" >
            <Typography gutterBottom variant="h5" component="h2">
              {file.title}
            </Typography>
            <StarIcon style={{ color: "#f9f10a"}} fontSize="large" onClick={onFavClick} />
          </Box>
          <Grid container>
            <Grid item>
              <Chip variant="outlined" size="small" label={file.section} />
            </Grid>
            <Grid item>
              <Typography gutterBottom ariant="caption">
                {new Date(file.duration * 1000).toISOString().substr(11, 5)}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}