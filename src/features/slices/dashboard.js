import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { getDashboardData } from "../actions/dashboard";
  

const initialState = {
  isLoading: false,
  isUserLoggedIn:false,
  dashboardData: {},
  errorMessage: "",
};



// ---------------------------------------------------------------------------------------

 const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(getDashboardData.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getDashboardData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.dashboardData= action.payload.data


      })
      .addCase(getDashboardData.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;

      })
      

  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = dashboardSlice.actions;
export default dashboardSlice.reducer;