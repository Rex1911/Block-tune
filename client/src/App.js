import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from "./Routes/Home/Home";
import Signup from "./Routes/Signup/Signup";
import { Switch, Route } from "react-router-dom";
import getWeb3 from './util/getWeb3';
import FactoryContract from "./contracts/Factory.json";
import { BrowserRouter } from "react-router-dom";

class App extends Component {

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      // For debugging purposes
      console.log(accounts);

      // Get the contract instance.
      const factoryContractAddress = "";
      const factoryContract = await new web3.eth.Contract(
        JSON.parse(FactoryContract.interface), factoryContractAddress
      );

      // Set web3, accounts, and contract to the global state, and then proceed with an
      // example of interacting with the contract's methods.
      this.props.setInitials(accounts[0], web3, factoryContract);
      this.handleLogin(accounts[0]);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  handleLogin = async (address) => {
    let data = {
      address
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
      console.log(!res.newUser);
      if(!res.newUser) {
        this.props.setUser(res.user.name)
      }
    })
    .catch(console.log);
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setInitials: (address, web3, factory) => dispatch({type: "SET_INITIALS", address, web3, factory}),
    setUser: (name) => dispatch({type: 'SET_USERNAME', name})
  }
}

// const mapStateToProps = (state) => {
//   return{
//     address: state.address
//   }
// }

export default connect(null, mapDispatchToProps)(App);