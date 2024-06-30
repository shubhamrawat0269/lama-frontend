import userReducer from "./slices/userSlice";
import utilsReducer from "./slices/utilsSlice";
import wrkspaceReducer from "./slices/workspaceSlice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  userData: userReducer,
  utilsData: utilsReducer,
  workspaceData: wrkspaceReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
