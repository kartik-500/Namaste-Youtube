import { configureStore } from "@reduxjs/toolkit";
import navScrollSliceReducer from "./navScrollSlice";

const appStore = configureStore({
  reducer: {
    navScroll: navScrollSliceReducer,
  },
});

export default appStore;
