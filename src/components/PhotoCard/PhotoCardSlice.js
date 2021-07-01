import axios from "axios";
import {BASEURL} from "../../constants"

// State
const initialState = {
  status: "idle",
  applyFilter: false,
  photolist: [],
  filteredPhotolist: []
};


//Reducers
export default function photosReducer(state = initialState, action){
  switch(action.type){
    case "photos/photosLoading": {
      return {
        ...state,
        status: "loading"
      };
    }
    case "photos/photosLoaded": {
      const newPhotos = action.payload;
      return {
        ...state,
        status: "idle",
        photolist: newPhotos
      }
    }
    default:
      return state;
  }
}

// Action creators
export const photosLoading = () => ({type: "photos/photosLoading"});

export const photosLoaded = data => ({
  type: "photos/photosLoaded",
  payload: data
})

// Thunk function
export const fetchPhotos = () => async (dispatch) => {
  dispatch(photosLoading());
  const source = axios.CancelToken.source();
  try {
    const response = await axios.get(BASEURL);
    return dispatch(photosLoaded(response.data));
  } catch (error) {
    if (axios.isCancel(error)) {
      source.cancel();
    } else {
      throw error;
    }
  }
};


//selectors
export const selectLoadingStatus = state=>state.photos.status 
export const selectPhotos = state=>state.photos.photoList