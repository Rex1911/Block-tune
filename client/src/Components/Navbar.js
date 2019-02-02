import React, { Component } from "react";
import {connect} from 'react-redux';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';

class Navbar extends Component{

  styles = {
    root: {
      flexGrow: 1
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    }
  };

  render(){
    console.log(this.props.isLoggedIn);
    let name;
    if(this.props.isLoggedIn){
      name = this.props.username;
    } else {
      name =<Link to='/signup'><Button color="inherit">SignUp</Button></Link>
    }
    console.log(this.props);
    return (
      <div style={this.styles.root}>
        <AppBar position="static" color="default">
          <Toolbar variant="dense">
            <Typography
              align="center"
              variant="h6"
              color="inherit"
              style={this.styles.grow}
            >
              BlockTunes
            </Typography>
            {name}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    address: state.address,
    isLoggedIn: state.isLoggedIn,
    username: state.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setUser: (address, name) => dispatch({type: "SET_USERNAME", name})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
