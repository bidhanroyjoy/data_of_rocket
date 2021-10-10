import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { createStore } from "redux";
import * as Types from "./Types";

const initializitState = {
  tasks: [],
  searchText: "",
};

function CounterReducer(state = initializitState, action) {
  switch (action.type) {
    case Types.GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
      break;
    case Types.SEARCH_TEXT:
      console.log("action.payload :>> ", action.payload);
      return {
        ...state,
        searchText: action.payload,
      };
      break;

    default:
      break;
  }
  return state;
}
export default CounterReducer;
