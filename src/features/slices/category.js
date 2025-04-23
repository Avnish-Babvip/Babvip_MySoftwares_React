import { createSlice } from "@reduxjs/toolkit";
import { getAllSoftwaresStyle2, getCategoryData, getCategoryDataBySlug, getSoftwareDataBySlug, getStyle1SoftwareListing } from "../actions/category";


const initialState = {
  isLoading: false,
  categoryData:{},
  categoryDetailData:{},
  errorMessage: "",
  softwareDetailData:{},
  styleSoftware:[],
  allSoftwareData:[]
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

      .addCase(getSoftwareDataBySlug.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getSoftwareDataBySlug.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.softwareDetailData = action.payload.data; 
      })
      .addCase(getSoftwareDataBySlug.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch category data.";
      })

      .addCase(getStyle1SoftwareListing.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getStyle1SoftwareListing.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.styleSoftware = action.payload.data; 
      })
      .addCase(getStyle1SoftwareListing.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch category data.";
      })
      .addCase(getAllSoftwaresStyle2.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getAllSoftwaresStyle2.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.allSoftwareData = action.payload.data; 
      })
      .addCase(getAllSoftwaresStyle2.rejected, (state, action) => {
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