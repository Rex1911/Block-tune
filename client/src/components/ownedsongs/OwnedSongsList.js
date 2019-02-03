import React, { Component } from "react";
import { connect } from 'react-redux';
import Grid from "@material-ui/core/Grid";
import SongCard from "../songs/SongCard";
import Typography from "@material-ui/core/Typography";

class OwnedSongsList extends Component{
  state = {
    data : []
  }
  
  componentDidMount = () => {
    let data = {
      address: this.props.address
    }
    fetch("/songs/owned", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      this.setState({data:res})
    })
    .catch(console.log);
  }
  
  render(){
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

        <Grid container spacing={24}>
          <Grid item xs>
            <SongCard />
          </Grid>
          <Grid item xs>
            <SongCard />
          </Grid>
          <Grid item xs>
            <SongCard />
          </Grid>
        </Grid>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return{
    address: state.address
  }
}

export default connect(mapStateToProps)(OwnedSongsList);
