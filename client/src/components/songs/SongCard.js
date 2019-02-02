import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const SongCard = (props) => {
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
            {props.title}
          </Typography>
          <Typography component="p">Author: {props.author}</Typography>
          <Typography component="p">Genre: {props.genre}</Typography>
          <Typography component="p">Cost: {props.cost}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ position: "relative" }}>
        <Button
          size="small"
          variant="contained"
          style={{
            backgroundColor: "#404040",
            color: "white",
            fontWeight: "bold"
          }}
        >
          Tip 1$
        </Button>
        <Button
          size="small"
          variant="contained"
          style={{
            backgroundColor: "#404040",
            color: "white",
            fontWeight: "bold"
          }}
        >
          Tip 3$
        </Button>
        <Button
          size="small"
          variant="contained"
          style={{
            backgroundColor: "#404040",
            color: "white",
            fontWeight: "bold"
          }}
        >
          Tip 5$
        </Button>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          style={{
            color: "white",
            fontWeight: "bold",
            position: "absolute",
            right: 0
          }}
        >
          Purchase
        </Button>
      </CardActions>
    </Card>
  );
};

export default SongCard;
