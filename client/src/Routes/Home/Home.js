import React, { Component } from "react";
import connect from "react-redux";
import Navbar from "../../Components/Navbar";
import Banner from "./Banner";

class Home extends Component {

  handleLogin = async () => {
    let data = {
      address: this.props.address
    };
    fetch("/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      if(res.newUser === true) {
        this.props.history.push('/signup');
      } else {
        this.props.setUser({address: res.user.address, name: res.user.name})
      }
    })
    .catch(err => {
      console.log("Something went wrong!");
    })
  };

  render() {
    return (
      <div>
        <Navbar loginHandler={this.handleLogin} />
        <Banner />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    address: state.address
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setUser: (address, name)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);