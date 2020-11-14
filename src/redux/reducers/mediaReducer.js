import {
  DOWNLOADING,
  DOWNLOADING_SUCCESS,
  DOWNLOADING_ERROR,
  // SELECT_ITEM,
} from "../actionTypes/mediaTypes";

//  Import Mock data for testing
import mockData from "../../mocks/mockData";

const initialState = {
  files: mockData.contents,
  user: mockData.user,
  downloading: false, //  if we ara downloading files
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
    case DOWNLOADING_ERROR:
      return {
        downloading: false,
        files: [],
        user: null,
      };
    // case SELECT_ITEM:
    //   return {
    //     ...state,
    //     fileSelected: action.payload,
    //   };
    default:
      return state;
  }
}
