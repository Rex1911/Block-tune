const initState = {
  isLoggedIn: 0,
  username: '',
  address: '',
  web3: '',
  factoryContract: '',
  bottomValue: 0,
  history: '',
  changed: false,
  songId: 0
}

const Reducer = (state = initState, action) => {
  switch(action.type){
    case "SET_INITIALS":
      return{
        ...state,
        web3: action.web3,
        factoryContract: action.factory,
        address: action.address,
      }
    case "SET_HISTORY":
      return{
        ...state,
        history: action.history
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
    case "BOTTOM_VALUE":
      return{
        ...state,
        bottomValue: action.value,
        changed: true
      }
    case "CHANGED":
      return{
        ...state,
        changed: false
      }
    default:
      console.log("Default Reducer");
      return{
        ...state
      }
  }
}

export default Reducer;
