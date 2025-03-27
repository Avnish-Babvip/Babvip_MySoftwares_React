import { createSlice } from "@reduxjs/toolkit";
import {  getTeam} from "../actions/team";


const initialState = {
  isLoading: false,
  teamData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

 const teamSlice = createSlice({
  name: "teamSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
   
      .addCase(getTeam.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getTeam.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.teamData = action.payload.data; 
      })
      .addCase(getTeam.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch help center";
      })

  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = teamSlice.actions;
export default teamSlice.reducer;