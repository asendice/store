import youtubeApi from "../apis/youtubeApi";

// gets videos from youtube api utilizing the term paremter for youtube's q param
export const getVideos = (term) => {
  return async (dispatch) => {
    await youtubeApi
      .get("/search", {
        params: {
          q: term,
        },
      })
      .then((response) => {
        if (response) {
          console.log(response.data);
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      })
      .then((response) => {
        dispatch(addVideos(response.data.result));
      });
  };
};

export const addVideos = (videos) => {
  return {
    type: "ADD_VIDEOS",
    payload: videos,
  };
};
