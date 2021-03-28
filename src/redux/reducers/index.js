import { combineReducers } from "redux";
import ListOfNews from "./NewsReducer";

export default combineReducers({
  ListOfNews: ListOfNews,
});
