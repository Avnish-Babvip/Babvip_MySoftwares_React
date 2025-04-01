import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import { headers } from "./headMenu";

// Fetch  category data
export const getCategoryData = createAsyncThunk(
  "/site/softwarecategory",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/site/softwarecategory`, {
        withCredentials: false,
        headers: headers,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to fetch category data."
      );
    }
  }
);
export const getStyle1SoftwareListing = createAsyncThunk(
  "site/softwarecategorystyle1",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/site/softwarecategorystyle1`, {
        withCredentials: false,
        headers: headers,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to fetch category data."
      );
    }
  }
);

export const getCategoryDataBySlug = createAsyncThunk(
  "/site/categoryallsoftware",
  async (url, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(url, {
        withCredentials: false,
        headers: headers,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to fetch help details"
      );
    }
  }
);

export const getSoftwareDataBySlug = createAsyncThunk(
  "/site/softwareData",
  async (slug, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/site/softwaredetail/${slug}`, {
        withCredentials: false,
        headers: headers,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to fetch help details"
      );
    }
  }
);
