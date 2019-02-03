import React, { Component } from "react";
import { connect } from 'react-redux';
import Grid from "@material-ui/core/Grid";
import PublishedSongCard from "./PublishedSongCard";
import Typography from "@material-ui/core/Typography";

class PublishedSongList extends Component{
  state = {
    data : []
  }
  
  componentDidMount = () => {
    this.props.firstSet();
    let data = {
      address: this.props.address
    }
    fetch("/song/published", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      for(let i=0; i<res[0].publishedSongs.length; i++){
        let data = { publishedAddress: res[0].publishedSongs[i] }
        fetch("/song/publishedSong", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8"
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(song => this.props.addSong(song));
      }
    })
    .catch(console.log);
  }
  
  render(){
    let publishedSongComponent;
      let i=0;
      publishedSongComponent = this.props.publishedSongArray.map(song => {
        i++;
        return(
          <Grid item xs key={i}>
            <PublishedSongCard song={song} key={i}/>
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
          published songs
        </Typography>

        <Grid container spacing={24}>
          {publishedSongComponent}
        </Grid>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return{
    address: state.address,
    publishedSongArray: state.publishedSongArray
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addSong: (song) => dispatch({type:"ADD_SONG_PUBLISHER", song}),
    firstSet: () => dispatch({type: "FIRST_SET_START"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishedSongList);
