import React,{Component} from "react";
import { connect } from 'react-redux';
import Grid from "@material-ui/core/Grid";
import SongCard from "./SongCard";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Song from "../../util/Song";

class SongList extends Component {
  state = {
    data : [],
    searchBoxText: ''
  }
  
  componentDidMount = () => {
    fetch("/song")
    .then(res => res.json())
    .then(res => {
      this.setState({data:res})
    })
  }

  handlePurchase = async (address, price, purchasedSong) => {
    fetch('https://rest.coinapi.io/v1/exchangerate/ETH/USD',{
      method: "GET",
      headers: {'X-CoinAPI-Key': 'C112BC30-2ED6-4ACB-BDEB-9E7FBA42140B'}
    })
      .then(res => res.json())
      .then(res => {
        let songContract = Song(address, this.props.web3);
        let valuePrice = price/res.rate;
        songContract.methods.purchase()
          .send({
            from: this.props.userAddress,
            value: this.props.web3.utils.toWei(valuePrice.toString(),'ether')
          })
          .then(() => {
            let purchasedSongData = {
              purchasedSongAddress: address,
              purchasedUserAddress: this.props.userAddress
            }
            
            fetch("/song/purchase",{
              method:"POST",
              headers : {
                "Content-Type": "application/json;charset=UTF-8"
              },
              body: JSON.stringify(purchasedSongData)
            })
          })
          .catch((e) => {
            console.log(e)
          });
      });
  }

  handleSearchChange = e => {
    this.setState({searchBoxText: e.target.value})
  }

  handleSearchSubmit = () => {
    let data = {
      search: this.state.searchBoxText
    }
    fetch("/song/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => this.setState({data: res}))
    .catch(console.log);
  }
  
  render() {
    let i=0;
    let songList = this.state.data.map(song => {
      i++;
      return(
        <Grid item xs={4} key={i}>
            <SongCard song={song} purchase={this.handlePurchase} />
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
          songs
        </Typography>
  
        <div style={{ textAlign: "center" }}>
          <TextField
            label="Search"
            margin="normal"
            variant="outlined"
            name="searchBoxText"
            style={{ margin: "auto", marginBottom: 10 }}
            onChange={this.handleSearchChange}
          />
          <br />
  
          <Button
            variant="contained"
            color="secondary"
            style={{ marginBottom: 20 }}
            onClick={this.handleSearchSubmit}
          >
            Search
          </Button>
        </div>
        <div style={{margin: '0 10%'}}>
          <Grid container spacing={24}>
            {songList}
          </Grid>
        </div>
      </div>
    );
  }
  
};

const mapStateToProps = (state) => {
  return{
    userAddress: state.address,
    web3: state.web3
  }
}

export default connect(mapStateToProps)(SongList);
