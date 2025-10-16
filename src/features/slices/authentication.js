import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import {
  changePassword,
  checkSoftwareExist,
  customerLogin,
  customerLogout,
  getCustomerOrders,
  getCustomerProducts,
  resetPasswordMail,
} from "../actions/authentication";

const formattedDate = new Date().toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

const initialState = {
  isLoading: false,
  isUserLoggedIn: false,
  isPasswordChanged: false,
  customerData: {},
  response: {},
  orderData: null,
  productData: null,
  errorMessage: "",
  checkSoftwareResponse: null,
};

// ---------------------------------------------------------------------------------------

const customerSlice = createSlice({
  name: "customerSlice",
  initialState,
  reducers: {
    resetForgotPasswordState: (state) => {
      state.isPasswordChanged = false;
      state.errorMessage = "";
    },
    resetCustomerState: (state) => {
      state.isUserLoggedIn = false;
      state.customerData = {};
    },
    resetErrorMessage: (state, action) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(customerLogin.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(customerLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isUserLoggedIn = true;
        state.customerData = action.payload.data;
        toast("Login Successfull.", {
          description: formattedDate,
        });
      })
      .addCase(customerLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed to login API.";
        toast(action.payload, {
          description: formattedDate,
        });
      })
      .addCase(resetPasswordMail.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(resetPasswordMail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload;
        state.errorMessage = "";
        toast(action.payload.message, {
          description: formattedDate,
        });
      })
      .addCase(resetPasswordMail.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed to login API.";
        toast(action.payload, {
          description: formattedDate,
        });
      })
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isPasswordChanged = true;
        toast("Password reset successfully.", {
          description: formattedDate,
        });
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed to login API.";
        toast(action.payload, {
          description: formattedDate,
        });
      })
      .addCase(customerLogout.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(customerLogout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isUserLoggedIn = false;
        state.customerData = {};
        toast("Log out Successfull.", {
          description: formattedDate,
        });
      })
      .addCase(customerLogout.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to logout API.";
        toast("Logout failed. Please try again", {
          description: formattedDate,
        });
      })
      .addCase(getCustomerOrders.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getCustomerOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.orderData = action.payload.customer_order;
      })
      .addCase(getCustomerOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed to API.";
      })
      .addCase(getCustomerProducts.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getCustomerProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.productData = action.payload.customer_product;
      })
      .addCase(getCustomerProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed ";
      })
      .addCase(checkSoftwareExist.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(checkSoftwareExist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.checkSoftwareResponse = action.payload;
      })
      .addCase(checkSoftwareExist.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed  ";
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {
  resetCustomerState,
  resetForgotPasswordState,
  resetErrorMessage,
} = customerSlice.actions;
export default customerSlice.reducer;
