import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import configurationSlice from "./configuration/configurationSlice";

const persistConfig = {
  key: "root",
  storage,
};

export const rootReducer = combineReducers({
  configuration: persistReducer(persistConfig, configurationSlice),
});
