import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import { headers } from "./headMenu";


const getCsrfToken = async () => {
    const response = await instance.get("/site/csrf-token",{
      headers: headers
    });
    return response.data.csrf_token;
  };  

  
  export const customerLogin = createAsyncThunk(
    "/customer/logincheck",
    async (payload, { rejectWithValue }) => {
      try {
          const {data} = await instance.post(`/customer/logincheck`, {...payload,_token:await getCsrfToken()}, {
              withCredentials: false,
              headers: headers,
            });
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data.message || "Failed to post customer login");
      }
    }
  );

  export const customerLogout = createAsyncThunk(
    "customerLogout",
    async (loginToken, { rejectWithValue }) => {
      try {
          const {data} = await instance.get(`/customer/logout`, {
              withCredentials: false,
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${loginToken}`,
              }
            });
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data.message || "Failed to logout customer ");
      }
    }
  );

  
