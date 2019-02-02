import React,{Component} from "react";
import Grid from "@material-ui/core/Grid";
import SongCard from "./SongCard";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class SongList extends Component {
  state = {
    data : []
  }
  
  componentDidMount = () => {
    fetch("/song")
    .then(res => res.json())
    .then(res => {
      this.setState({data:res})
    })
  }
  
  render() {
    let songList = this.state.data.map(song => {
      return(
        <Grid item xs>
            <SongCard title={song.name} author={song.artist} genre={song.genre} cost={song.price}/>
        </Grid>
      )
    });
    
    return (
      <div
        style={{
          marginTop: 50,
          marginBottom: 50,
          marginLeft: 10,
          marginRight: 10
        }}
      >
        <Typography
          align="center"
          style={{
            fontFamily: "Major Mono Display",
            fontSize: "4vw",
            marginBottom: 10
          }}
        >
          songs
        </Typography>
  
        <div style={{ textAlign: "center" }}>
          <TextField
            label="Search"
            value="Search here"
            margin="normal"
            variant="outlined"
            style={{ margin: "auto", marginBottom: 10 }}
          />
          <br />
  
          <Button
            variant="contained"
            color="secondary"
            style={{ marginBottom: 20 }}
          >
            Search
          </Button>
        </div>
  
        <Grid container spacing={24}>
          {songList}
        </Grid>
      </div>
    );
  }
  
};

export default SongList;
