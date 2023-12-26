import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IWithNetworkState, withNetworkReducers, withNetworkState } from "helpers/networks";
import { IAppEntityState, themes, languages } from "./AppEntity.interfaces";

const initialState: IAppEntityState & IWithNetworkState = {
  ...withNetworkState,
  language: "eng",
  theme: "dark",
  appLoaded: false,
};

export const AppEntity = createSlice({
  name: "AppEntity",
  initialState,
  reducers: {
    ...withNetworkReducers,
    setTheme(state, action: PayloadAction<themes>) {
      state.theme = action.payload;
    },
    setLanguage(state, action: PayloadAction<languages>) {
      state.language = action.payload;
    },
    setAppLoaded(state) {
      state.appLoaded = true;
    },
  },
});
