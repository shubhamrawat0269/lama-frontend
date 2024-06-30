import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSidebarMenu: "project",
  uploadSource: "",
  uploadModal: false,
  fileData: null,
  selectedUserData: {},
};

export const workspaceSlice = createSlice({
  name: "workspace-data",
  initialState,
  reducers: {
    setActiveSidebar: (state, action) => {
      state.activeSidebarMenu = action.payload;
    },
    setUploadModal: (state, action) => {
      state.uploadSource = action.payload.title;
      state.uploadModal = action.payload.show;
    },
    setFileData: (state, action) => {
      state.fileData = action.payload;
    },
    setFileInfo: (state, action) => {
      state.fileData.push(action.payload);
    },
    setSelectedUserData: (state, action) => {
      state.selectedUserData = action.payload;
    },
  },
});

export const {
  setActiveSidebar,
  setUploadModal,
  setFileData,
  setFileInfo,
  setSelectedUserData,
} = workspaceSlice.actions;
export default workspaceSlice.reducer;
