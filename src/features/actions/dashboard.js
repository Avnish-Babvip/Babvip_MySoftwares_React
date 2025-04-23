import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

  export const getDashboardData = createAsyncThunk(
    "/customer/dashboard",
    async (loginToken, { rejectWithValue }) => {
      try {
          const {data} = await instance.get(`/customer/dashboard`, {
              withCredentials: false,
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${loginToken}`,
              }
            });
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data.message || "Failed dashboard API ");
      }
    }
  );

  
