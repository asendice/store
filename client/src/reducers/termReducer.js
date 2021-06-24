const termReducer = (state = {}, action) => {
  switch (action.type){
    case "VIDEO_TERM":
      console.log(action.payload)
      return action.payload;
    default:
      return state;
  }
}

export default termReducer;