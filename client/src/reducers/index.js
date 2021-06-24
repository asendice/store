import { combineReducers } from "redux";
import videoReducer from "./videoReducer";
import termReducer from "./termReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  videos: videoReducer,
  videoTerm: termReducer,
  form: formReducer,
});
