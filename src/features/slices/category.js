import { createSlice } from "@reduxjs/toolkit";
import { getCategoryData, getCategoryDataBySlug } from "../actions/category";


const initialState = {
  isLoading: false,
  categoryData:{},
  categoryDetailData:{},
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

 const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getCategoryData.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getCategoryData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.categoryData = action.payload.data; 
      })
      .addCase(getCategoryData.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch category data.";
      })

      .addCase(getCategoryDataBySlug.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getCategoryDataBySlug.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.categoryDetailData = action.payload; 
      })
      .addCase(getCategoryDataBySlug.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch category data.";
      })

  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = categorySlice.actions;
export default categorySlice.reducer;