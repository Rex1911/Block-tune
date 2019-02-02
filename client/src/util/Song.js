import web3 from "./getWeb3";
import Song from "../contracts/Song.json";

export default (address)=>{
    return new web3.eth.Contract(
        JSON.parse(Song.interface),
        address
    );
};