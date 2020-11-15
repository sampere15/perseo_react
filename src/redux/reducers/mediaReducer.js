import {
  DOWNLOADING,
  DOWNLOADING_SUCCESS,
  DOWNLOADING_ERROR,
  ITEM_FAV_ADD,
  ITEM_FAV_REMOVE,
} from "../actionTypes/mediaTypes";

const initialState = {
  // files: mockData.contents,
  files: [],
  user: null,
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
        user: action.payload.user,
        // files: action.payload.contents.map((file) => {
        //   //  Check if file is part of favs array
        //   file.fav = action.payload.user.favs.includes(file.id);
        //   return file;
        // }),
        files: action.payload.contents,
      };
    case DOWNLOADING_ERROR:
      return {
        downloading: false,
        files: [],
        user: null,
      };
    case ITEM_FAV_ADD:
      return {
        ...state,
        user: {
          ...state.user,
          favs: [...state.user.favs, action.payload],
        },
      };
    case ITEM_FAV_REMOVE:
      return {
        ...state,
        user: {
          ...state.user,
          favs: state.user.favs.filter((fileId) => {
            return fileId !== action.payload;
          }),
        },
      };
    default:
      return state;
  }
}
