import axios from "axios";
import * as Types from "./Types";

export const GetApiDataAction = () => async (dispatch) => {
  let data = [];
  axios.get("https://api.spacexdata.com/v3/launches").then((res) => {
    data = res.data;
    data.sort();
    data.reverse();
    dispatch({ type: Types.GET_TASKS, payload: data });
  });
};
export const handleSearch = (search) => async (dispatch) => {
  console.log("search :>> ", search);
  dispatch({ type: Types.SEARCH_TEXT, payload: search });
};
