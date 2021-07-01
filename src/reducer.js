import {combineReducers} from "redux";

import photosReducer from "./components/PhotoCard/PhotoCardSlice"

const rootReducer = combineReducers({
  photos: photosReducer
});

export default rootReducer;

