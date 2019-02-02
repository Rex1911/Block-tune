import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../layout/Navbar";
import Banner from "./Banner";
import SongList from "../songs/SongList";
import bottomStatus from "../../util/bottomStatus"

class Home extends Component {

  render() {
    if(this.props.history){
      this.props.setHistory(this.props.history);
    }
    return (
      <div>
        <Navbar />
        <Banner />
        <SongList />
        {bottomStatus(this.props.isLoggedIn)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    address: state.address,
    isLoggedIn: state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setUser: (address, name) => dispatch({type: "SET_USERNAME", name}),
    setHistory: (history) => dispatch({type:"SET_HISTORY", history})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);