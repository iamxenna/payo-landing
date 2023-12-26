import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { useSelector } from "react-redux";

import { AppEntity } from "./App/AppEntity";
import { DeviceEntity } from "./Device/DeviceEntity";

export const store = configureStore({
  reducer: {
    App: AppEntity.reducer,
    Device: DeviceEntity.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ serializableCheck: false })],
});

export type IStore = ReturnType<typeof store.getState>;

interface IActions {
  App: typeof AppEntity.actions;
  Device: typeof DeviceEntity.actions;
}

export const actions: IActions = {
  App: AppEntity.actions,
  Device: DeviceEntity.actions,
};

export const useStore = <T>(selector: (store: IStore) => T): { store: T; actions: IActions } => {
  return {
    actions,
    store: useSelector(selector),
  };
};

export default createWrapper(() => store);
