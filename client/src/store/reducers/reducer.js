const initState = {
  isLoggedIn: 0,
  username: '',
  address: '',
  web3: '',
  factoryContract: '',
  songContract: ''
}

const Reducer = (state = initState, action) => {
  switch(action.type){
    case "SET_INITIALS":
      console.log(action);
      return{
        ...state,
        web3: action.web3,
        factoryContract: action.factory,
        address: action.address,
      }
    case "SET_SONG_ADDRESS":
      console.log("song address");
      return{
        ...state,
        songContract: action.songContract,
      }
    case "SET_USERNAME":
      console.log("setname", action.name);
      return{
        ...state,
        username: action.name,
        isLoggedIn: 1,
      }
    default:
      console.log("Default Reducer");
      return{
        ...state
      }
  }
}

export default Reducer;
