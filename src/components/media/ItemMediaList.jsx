import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles({
  root: {
    maxWidth: 230,
  },
  media: {
    height: 400,
  },
});

export default function ItemMediaList({file}) {
  const classes = useStyles();

  const onFavClick = e => {
    //  Prevent click on lower item
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    console.log("fav click");
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
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
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
