import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import BottomNav from '../layout/BottomNav';

class Approval extends Component{

    state = {
        song: []
    }

    componentDidMount = () => {
        let search = this.props.location.pathname.slice(10);
        console.log(search);
        let data = { search };
        fetch("/song/searchApprove", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(res => {
                console.log(res[0]);
                this.setState({song: res[0]});
          })
          .catch(console.log);
    }

    render(){
        if(this.state.song){
            return(
                <div style={{width: "100%"}}>
                    <Navbar />
                    <h1 style={{margin: "2% 35%"}}>approvers of the song</h1>
                    <h1 style={{margin: "2% 35%"}}>{this.state.song.name.toLowerCase()}</h1>
                    <BottomNav />
                </div>
            )
        } else {
            return(<h1>Loading</h1>);
        }
    }
}

export default Approval;