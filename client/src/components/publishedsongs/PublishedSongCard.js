import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const SongCard = (props) => {
  if(props.song){
    let { song } = props;
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {song.name}
            </Typography>
            <Typography component="p">Author: {song.artist}</Typography>
            <Typography component="p">Genre: {song.genre}</Typography>
            <Typography component="p">Cost: {song.price}$</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  } else {
    return("No Songs")
  }
  
}

export default SongCard;
