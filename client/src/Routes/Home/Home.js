import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../../Components/Navbar";
import Banner from "./Banner";

class Home extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar />
        <Banner />
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
    setUser: (address, name) => dispatch({type: "SET_USERNAME", name})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);