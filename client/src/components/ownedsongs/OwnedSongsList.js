import React, { Component } from "react";
import { connect } from 'react-redux';
import Grid from "@material-ui/core/Grid";
import OwnedSongCard from "./OwnedSongCard";
import Typography from "@material-ui/core/Typography";

class OwnedSongsList extends Component{
  state = {
    data : []
  }
  
  componentDidMount = () => {
    this.props.firstSet();
    let data = {
      address: this.props.address
    }
    fetch("/song/owned", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      for(let i=0; i<res[0].ownedSongs.length; i++){
        let data = { ownedAddress: res[0].ownedSongs[i] }
        fetch("/song/ownedSong", {
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
  
  handleDown = (name) => {
    window.location = `http://localhost:5000/song/download/${name}` 
  }
  
  render(){
    let ownedSongComponent;
      let i=0;
      ownedSongComponent = this.props.ownedSongArray.map(song => {
        i++;
        return(
          <Grid item xs={4} key={i}>
            <OwnedSongCard song={song} key={i} down={this.handleDown}/>
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
          owned songs
        </Typography>
        <div style={{margin: "auto 10%"}}>
          <Grid container spacing={24}>
            {ownedSongComponent}
          </Grid>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return{
    address: state.address,
    ownedSongArray: state.ownedSongArray
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addSong: (song) => dispatch({type:"ADD_SONG_OWNED", song}),
    firstSet: () => dispatch({type: "FIRST_SET_START"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnedSongsList);
