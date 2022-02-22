import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "./addressSlice";
import keywordReducer from "./keywordSlice";
export default configureStore({
  reducer: {
    address: addressReducer,
    companys: keywordReducer,
  },
});
