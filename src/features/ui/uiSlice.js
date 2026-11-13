import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { sidebarOpen: false },
  reducers: {
    openSidebar: (s) => { s.sidebarOpen = true; },
    closeSidebar: (s) => { s.sidebarOpen = false; },
  },
});

export const { openSidebar, closeSidebar } = uiSlice.actions;
export default uiSlice.reducer;
