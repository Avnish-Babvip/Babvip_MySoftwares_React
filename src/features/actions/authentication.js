import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import { headers } from "./headMenu";

const getCsrfToken = async () => {
  const response = await instance.get("/site/csrf-token", {
    headers: headers,
  });
  return response.data.csrf_token;
};

export const customerLogin = createAsyncThunk(
  "/customer/logincheck",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(
        `/customer/logincheck`,
        { ...payload, _token: await getCsrfToken() },
        {
          withCredentials: false,
          headers: headers,
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to post customer login"
      );
    }
  }
);
export const resetPasswordMail = createAsyncThunk(
  "/customer/sendresetlinkemail",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(
        `/customer/sendresetlinkemail`,
        { ...payload, _token: await getCsrfToken() },
        {
          withCredentials: false,
          headers: headers,
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  "/customer/resetpassword",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(
        `/customer/resetpassword`,
        { ...payload, _token: await getCsrfToken() },
        {
          withCredentials: false,
          headers: headers,
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const customerLogout = createAsyncThunk(
  "customerLogout",
  async (loginToken, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/customer/logout`, {
        withCredentials: false,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${loginToken}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to logout customer "
      );
    }
  }
);

export const getCustomerOrders = createAsyncThunk(
  "/customer/order/data",
  async (loginToken, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/customer/customerorder`, {
        withCredentials: false,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${loginToken}`,
        },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed checkout API "
      );
    }
  }
);
export const getCustomerProducts = createAsyncThunk(
  "/customer/product",
  async (loginToken, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/customer/customerproduct`, {
        withCredentials: false,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${loginToken}`,
        },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed checkout API "
      );
    }
  }
);

export const checkSoftwareExist = createAsyncThunk(
  "/customer/checksoftwareexist",
  async ({ payload, loginToken }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(
        `/customer/checksoftwareexist`,
        { ...payload, _token: await getCsrfToken() },
        {
          withCredentials: false,
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${loginToken}`,
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
