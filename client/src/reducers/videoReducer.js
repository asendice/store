const videoReducer = (state = { videos: [] }, action) => {
  switch (action.type) {
    case "ADD_VIDEOS":
      return {
        ...state,
        videos: action.payload,
      };
    default:
      return state;
  }
};

export default videoReducer;
