import {
  DOWNLOADING,
  DOWNLOADING_SUCCESS,
  DOWNLOADING_ERROR,
  // SELECT_ITEM,
} from "../actionTypes/mediaTypes";

import axiosClient from "../../utils/axios";
import { logoutAction } from "./authActions";

//  Action for download files for the main page
export function getFilesAction() {
  return async (dispatch) => {
    try {
      //  Check if we dont have token, lets log out
      const token = localStorage.getItem("token");
      if (token === null) {
        dispatch(logoutAction());
        return;
      }

      //  To show loading spineer
      dispatch({
        type: DOWNLOADING,
      });

      //  Preparing post data
      const bodyFormData = new FormData();
      bodyFormData.append("token", token);
      bodyFormData.append("device", "Web");
      const res = await axiosClient.post("/GetView.php", bodyFormData);

      dispatch({
        type: DOWNLOADING_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: DOWNLOADING_ERROR,
      });
    }
  };
}

//  Action when we click on an item to watch it
// export function selectItemAction(item) {
//   return (dispatch) => {
//     dispatch({
//       type: SELECT_ITEM,
//       payload: item,
//     });
//   };
// }
