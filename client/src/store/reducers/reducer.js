const initState = {
  address: 'Not Logged In',
  web3: '',
  factoryContract: '',
  songContract: ''
}

const Reducer = (state = initState, action) => {
  switch(action.type){
    case "SET_INITIALS":
      return{
        web3: action.web3,
        factoryContract: action.factory,
        address: action.address,
        ...state
      }
    case "SET_SONG_ADDRESS":
      return{
        songContract: action.songContract,
        ...state
      }
    default:
      console.log("Default Reducer");
      return{
        ...state
      }
  }
}

export default Reducer;
