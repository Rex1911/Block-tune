import Song from "../contracts/Song.json";

export default (address, web3)=>{
    return new web3.eth.Contract(
        JSON.parse(Song.interface),
        address
    );
};