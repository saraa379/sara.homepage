import { combineReducers } from "redux";
import tabReducer from "./tabReducer";
import languageReducer from "./languageReducer";


export default combineReducers({
  currentTab: tabReducer,
  currentLanguage: languageReducer
});
