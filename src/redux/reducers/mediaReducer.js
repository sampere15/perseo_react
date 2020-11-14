import { DOWNLOADING, DOWNLOADING_SUCCESS, DOWNLOADING_ERROR } from "../actionTypes/mediaTypes";

const initialState = {
  files: [], //  files downloaded
  user: null,
  lastView: [],
  downloading: false, //  if we ara downloading files
  fileSelected: null, //  file clicked to see its details o play page
};

export default function mediaReducer(state = initialState, action) {
  switch (action.type) {
    case DOWNLOADING:
      return {
        ...state,
        downloading: true,
      };
    case DOWNLOADING_SUCCESS:
      return {
        downloading: false,
        files: action.payload.contents,
        user: action.payload.user,
      };
    default:
      return state;
  }
}
