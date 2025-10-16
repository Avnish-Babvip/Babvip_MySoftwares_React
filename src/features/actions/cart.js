import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import { headers } from "./headMenu";

const getCsrfToken = async () => {
  const response = await instance.get("/site/csrf-token", {
    headers: headers,
  });
  return response.data.csrf_token;
};

export const getCustomerCartData = createAsyncThunk(
  "/customer/cart/data",
  async (loginToken, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/customer/customercart`, {
        withCredentials: false,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${loginToken}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed dashboard API "
      );
    }
  }
);

export const deleteCartItem = createAsyncThunk(
  "/customer/removeproductcart/id",
  async ({ id, loginToken }, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(
        `/customer/removeproductcart/${id}`,
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

export const addToCart = createAsyncThunk(
  "/customer/addtocart",
  async ({ software_id, plan_id, loginToken }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(
        `/customer/addproductcart`,
        { software_id, plan_id, _token: await getCsrfToken() },
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

export const getCustomerCheckoutData = createAsyncThunk(
  "/customer/checkout/data",
  async (loginToken, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/customer/checkout`, {
        withCredentials: false,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${loginToken}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed checkout API "
      );
    }
  }
);

export const paymentProcess = createAsyncThunk(
  "/customer/paymentprocess",
  async ({ payload, loginToken }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(
        `/customer/paymentprocess`,
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

export const renewPaymentProcess = createAsyncThunk(
  "/customer/renewpaymentprocess",
  async ({ payload, loginToken }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(
        `/customer/customerrenewprocesspayment`,
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

export const getRenewCheckoutData = createAsyncThunk(
  "/customer/renewsoftware/id",
  async ({ loginToken, productId }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(
        `/customer/renewsoftware/${productId}`,
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
      return rejectWithValue(
        error.response.data.message || "Failed checkout API "
      );
    }
  }
);
