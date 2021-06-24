import { combineReducers } from "redux";
import videoReducer from "./videoReducer";
import videoTerm from "./termReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  videos: videoReducer,
  videoTerm: videoTerm,
  form: formReducer,
});
