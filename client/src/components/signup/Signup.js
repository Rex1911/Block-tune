import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import Navbar from '../layout/Navbar';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Signup extends Component {

  state = {
    name: '',
    status: ''
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value.toLowerCase() })
  }

  handleSubmit = () => {
    let data = {
      name: this.state.name,
      address: this.props.address
    };
    fetch("/auth/signin/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      if(res.success){
        this.setState({status: ''});
        this.handleRedirect();
      } else {
        this.setState({status: 'some error occured'});
      }
    })
    .catch(err => {
      this.setState({status: 'some error occured'});
      console.log(err);
    });
  }

  handleRedirect = () => {
    this.props.setUser(this.state.name);
    this.props.history.push('/');
  }

  render() {
    let name;
    if(this.state.name){
      name = <h4 style={{ marginTop: "10vh" }}>Welcome {this.state.name}</h4>
    } else {
      name = <h4 style={{ marginTop: "10vh" }}>enter your name</h4>
    }
    return(
      <Fragment>
        <Navbar />
        <div style={{ textAlign: "center", width: 310, margin: "auto" }}>
        {name}
        <TextField
          fullWidth
          id="standard-name"
          label="Name"
          style={{ maxWidth: 500 }}
          onChange={this.handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 20, backgroundColor: "#595959" }}
          onClick = {this.handleSubmit}
        >
          SignUp
        </Button>
      </div>
      <p>{this.state.status}</p>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    address: state.address
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setUser: (name) => dispatch({type: 'SET_USERNAME', name})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);