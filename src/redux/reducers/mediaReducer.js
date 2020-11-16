import {
  DOWNLOADING,
  DOWNLOADING_SUCCESS,
  DOWNLOADING_ERROR,
  ITEM_FAV_ADD,
  ITEM_FAV_REMOVE,
  APPLY_FILTER,
  CLEAR_FILTER,
} from "../actionTypes/mediaTypes";

const initialState = {
  files: [],
  user: null,
  downloading: false,
  filter: null,
  filesFiltered: null,
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
        ...state,
        downloading: false,
        user: action.payload.user,
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
    case APPLY_FILTER:
      return {
        ...state,
        filter: action.payload,
        filesFiltered: state.files.filter(
          (file) =>
            file.title.toLowerCase().includes(action.payload) ||
            file.section.toLowerCase().includes(action.payload)
        ),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filter: null,
        filesFiltered: null,
      };
    default:
      return state;
  }
}
