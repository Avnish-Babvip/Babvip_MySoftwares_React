import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import { headers } from "./headMenu";

const getCsrfToken = async () => {
  const response = await instance.get("/site/csrf-token",{
    headers: headers
  });
  return response.data.csrf_token;
};  

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

export const getProfileData = createAsyncThunk(
  "/customer/profile",
  async (loginToken, { rejectWithValue }) => {
    try {
        const {data} = await instance.get(`/customer/profile`, {
            withCredentials: false,
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${loginToken}`,
            }
          });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed Profile API ");
    }
  }
);

  export const changePasswordDashboard = createAsyncThunk(
    "/customer/changedpassword",
    async ({payload,loginToken}, { rejectWithValue }) => {
      try {
          const {data} = await instance.post(`/customer/changedpassword`,{...payload,_token:await getCsrfToken()}, {
              withCredentials: false,
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${loginToken}`,
              }
            });
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data.message);
      }
    }
  );

  export const updateProfileDashboard = createAsyncThunk(
    "/customer/updateprofile",
    async ({payload,loginToken}, { rejectWithValue }) => {
      try {
          const {data} = await instance.post(`/customer/updateprofile`, {...payload,_token:await getCsrfToken()}, {
              withCredentials: false,
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${loginToken}`,
              }
            });
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data.message);
      }
    }
  );

  export const updateProfilePhotoDashboard = createAsyncThunk(
    "/customer/updateprofilephoto",
    async ({payload,loginToken}, { rejectWithValue }) => {
      payload.append("_token", await getCsrfToken())
      try {
          const {data} = await instance.post(`/customer/updateprofilephoto`, payload, {
              withCredentials: false,
              headers: {
                Authorization: `Bearer ${loginToken}`,
              }
            });
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data.message);
      }
    }
  );

  
