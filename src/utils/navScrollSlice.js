import { createSlice } from "@reduxjs/toolkit";

const navScrollSlice = createSlice({
  name: "navScroll",
  initialState: {
    isSidebarOpen: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { toggleSidebar, closeSidebar } = navScrollSlice.actions;
export default navScrollSlice.reducer;
