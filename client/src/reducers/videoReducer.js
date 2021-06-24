const videoReducer = (state = { videos: [] }, action) => {
  switch (action.type) {
    case "ADD_BOXES":
      return {
        ...state,
        videos: action.payload,
      };
    default:
      return state;
  }
};
