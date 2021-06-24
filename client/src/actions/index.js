import youtubeApi from "../apis/youtubeApi";

// gets videos from youtube api utilizing the term paremter for youtube's q param
export const getVideos = (term) => {
  console.log(term, "from getVideos")
  return async (dispatch) => {
    await youtubeApi
      .get("/search", {
        params: {
          q: term,
        },
      })
      .then((response) => {
        if (response) {
          console.log(response.data.items);
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
        dispatch(addVideos(response.data.items));
      });
  };
};

export const addVideos = (videos) => {
  return {
    type: "ADD_VIDEOS",
    payload: videos,
  };
};

export const videoTerm = (term) => {
  return {
    type: "VIDEO_TERM",
    payload: term,
  };
};
