import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import { headers } from "./headMenu";



export const getAllCountries = createAsyncThunk(
  "/site/getallcountries",
  async (_, { rejectWithValue }) => {
    try {
        const {data} = await instance.get(`/site/getallcountries`, {
            withCredentials: false,
            headers: headers
          });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch countries.");
    }
  }
);

export const getAllStatesById = createAsyncThunk(
    "/site/getstatebycountryapi/",
    async (id, { rejectWithValue }) => {
      try {
          const {data} = await instance.get(`/site/getstatebycountryapi/${id}`, {
              withCredentials: false,
              headers: headers
            });
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data.message || "Failed to fetch states.");
      }
    }
  );


export const getAllCityById = createAsyncThunk(
  "/site/getcitybystateapi/id",
  async (id, { rejectWithValue }) => {
    try {
        const {data} = await instance.get(`/site/getcitybystateapi/${id}`, {
            withCredentials: false,
            headers: headers
          });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch cities");
    }
  }
);