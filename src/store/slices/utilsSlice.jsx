import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSignupModal: true,
  showProjectModal: false,
  projectInfo: "",
  projectLoader: false,
  projectList: [],
};

export const utilsSlice = createSlice({
  name: "utils-data",
  initialState,
  reducers: {
    setShowSignupModal: (state, action) => {
      state.showSignupModal = action.payload;
    },
    setShowProjectModal: (state, action) => {
      state.showProjectModal = action.payload;
    },
    setProjectLoader: (state, action) => {
      state.projectLoader = action.payload;
    },
    setProjectName: (state, action) => {
      state.projectInfo = action.payload;
    },
    setProjectList: (state, action) => {
      state.projectList.push(action.payload);
    },
    handleEmptyInitialState: (state) => {
      state.showProjectModal = false;
      state.showSignupModal = true;
      state.projectInfo = {};
      state.projectLoader = false;
      state.projectList = [];
    },
  },
});

export const {
  setShowSignupModal,
  setShowProjectModal,
  setProjectName,
  setProjectList,
  setProjectLoader,
  handleEmptyInitialState,
} = utilsSlice.actions;
export default utilsSlice.reducer;
