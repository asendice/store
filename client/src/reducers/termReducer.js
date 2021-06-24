const termReducer = (state = {}, action) => {
  switch (action.type){
    case "VIDEO_TERM":
      return action.payload;
    default:
      return state;
  }
}